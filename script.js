/* noteOS Starter site: the "See it in action" diagram.
   Each step sets a state on every note, link and line (data-s) plus a start
   delay (--d), and marks which chat bubbles arrive. CSS turns those into
   motion, so with reduced motion on, the same states show at once. */
(function () {
  var root = document.querySelector('.sia');
  if (!root) return;

  var STEPS = [
    {
      dur: 10000,
      title: 'A normal conversation.',
      text: 'You talk to Claude the way you would to a friend. When something is worth keeping, it asks before it saves.',
      s: {}
    },
    {
      dur: 8500,
      title: 'A file gets made.',
      text: 'Claude writes a note, Sponsor call.md, and adds it to the Trails on your Channel Basecamp so it can find it later.',
      s: { call: 'lit@0.3', lCall: 'on@1.3', hub: 'lit@1.9', trailCall: 'on@2.1' }
    },
    {
      dur: 8500,
      title: 'You wrap up.',
      text: 'The remember skill saves the session and updates Current Context with where things stand.',
      s: { call: 'rest', lCall: 'settled', trailCall: 'settled', cc: 'lit@1.4', ccNew: 'on@1.8' }
    },
    {
      dur: 12000,
      title: 'Next morning.',
      text: 'The pickup skill reads Current Context and the basecamp, so Claude already knows where you left off.',
      s: {
        call: 'rest', lCall: 'settled', trailCall: 'settled', ccNew: 'on',
        cc: 'lit@1.6', hub: 'lit@1.7', wCc: 'on@2.0', wHub: 'on@2.2',
        ideas: 'dim', upload: 'dim'
      }
    },
    {
      dur: 9000,
      title: 'It builds on what it knows.',
      text: 'The new script note links to the same basecamp, so each session adds to the last.',
      s: {
        call: 'rest', lCall: 'settled', trailCall: 'settled', ccNew: 'settled',
        script: 'lit@1.0', lScript: 'on@1.8', hub: 'lit@2.3', trailScript: 'on@2.5'
      }
    }
  ];
  // Resting state for anything a step does not mention.
  var BASE = {
    cc: 'rest', hub: 'rest', ideas: 'rest', upload: 'rest', call: 'hidden', script: 'hidden',
    ccNew: 'off', trailCall: 'off', trailScript: 'off', lCall: 'off', lScript: 'off', wCc: 'off', wHub: 'off'
  };

  // Two arrangements of the same notes: beside the chat, or stacked under it on narrower screens.
  // Cards are placed by their top left corner, circles by their center. A wire anchor is where the
  // line into the chat leaves that card, in the card's own coordinates.
  var SIZE = { cc: [206, 128], hub: [172, 214], call: [168, 104], script: [272, 92] };
  var LAYOUTS = {
    wide: {
      vb: [600, 430],
      pos: { cc: [10, 10], hub: [316, 100], call: [28, 182], script: [28, 326], ideas: [548, 62], upload: [548, 300] },
      amb: [[250, 28, 5, 'cc'], [468, 22, 6, 'ideas'], [588, 186, 4, 'upload'], [470, 410, 6, 'upload'], [262, 150, 4, 'hub'], [330, 400, 5, 'script'], [12, 300, 4, 'call']],
      wire: { cc: [0, 64], hub: [0, 206], dir: 'left' }
    },
    narrow: {
      vb: [360, 610],
      pos: { cc: [6, 6], hub: [182, 150], call: [6, 392], script: [82, 512], ideas: [300, 64], upload: [84, 222] },
      amb: [[236, 20, 4, 'cc'], [352, 140, 4, 'ideas'], [20, 320, 5, 'upload'], [350, 400, 5, 'hub'], [20, 560, 4, 'script'], [214, 380, 4, 'hub']],
      wire: { cc: [103, 0], hub: [52, 0], dir: 'up' }
    }
  };

  var SVGNS = 'http://www.w3.org/2000/svg';
  var stage = root.querySelector('.sia-stage');
  var svg = root.querySelector('.sia-svg');
  var wiresSvg = root.querySelector('.sia-wires');
  var target = root.querySelector('.sia-wire-target');
  var els = {};
  root.querySelectorAll('[data-k]').forEach(function (el) { els[el.getAttribute('data-k')] = el; });
  var sessions = root.querySelectorAll('.sia-session');
  var bubbles = root.querySelectorAll('.sia-chat .bubble');
  var caption = root.querySelector('.sia-caption:not(.sia-sizer)');
  var capbox = root.querySelector('.sia-capbox');
  var controls = root.querySelector('.sia-controls');
  var list = root.querySelector('.sia-list');
  var dots = root.querySelectorAll('.sia-dot');
  var toggle = root.querySelector('[data-act="toggle"]');
  var toggleLabel = toggle.querySelector('.sia-toggle-label');
  var toggleIcon = toggle.querySelector('svg');
  var PAUSE_ICON = '<path d="M9 6v12M15 6v12"/>';
  var PLAY_ICON = '<path d="M8 5.5v13l11-6.5z"/>';

  var wideMq = window.matchMedia ? window.matchMedia('(min-width: 1080px)') : null;
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var layoutName = null;
  var cur = 0;
  var playing = !(reduce && reduce.matches);
  var visible = !('IntersectionObserver' in window);
  var seen = visible;
  var timer = null;

  function escapeHtml(s) {
    return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  // Split your messages into words (or letters, for one-word messages) so they type in.
  bubbles.forEach(function (b) {
    if (!b.classList.contains('you')) return;
    var text = b.querySelector('.text');
    var nodes = [];
    (function walk(n) { n.childNodes.forEach(function (c) { if (c.nodeType === 3) nodes.push(c); else walk(c); }); })(text);
    var words = text.textContent.trim().split(/\s+/).length;
    var i = 0;
    nodes.forEach(function (tn) {
      var parts = words > 1 ? tn.textContent.split(/(\s+)/) : tn.textContent.split('');
      var frag = document.createDocumentFragment();
      parts.forEach(function (p) {
        if (!p) return;
        if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
        var sp = document.createElement('span');
        sp.className = 'tk';
        sp.style.setProperty('--i', String(i++));
        sp.textContent = p;
        frag.appendChild(sp);
      });
      tn.parentNode.replaceChild(frag, tn);
    });
    b.style.setProperty('--gap', words > 1 ? '0.11s' : '0.07s');
  });

  function center(L, k) {
    var p = L.pos[k];
    return SIZE[k] ? [p[0] + SIZE[k][0] / 2, p[1] + SIZE[k][1] / 2] : p;
  }

  function applyLayout() {
    var name = wideMq && !wideMq.matches ? 'narrow' : 'wide';
    if (name === layoutName) { drawWires(); return; }
    layoutName = name;
    var L = LAYOUTS[name];
    svg.setAttribute('viewBox', '0 0 ' + L.vb[0] + ' ' + L.vb[1]);
    svg.classList.toggle('is-narrow', name === 'narrow');
    svg.querySelectorAll('.pos').forEach(function (g) {
      var p = L.pos[g.getAttribute('data-node')];
      g.setAttribute('transform', 'translate(' + p[0] + ' ' + p[1] + ')');
    });
    svg.querySelectorAll('line[data-a]').forEach(function (ln) {
      var a = center(L, ln.getAttribute('data-a')), b = center(L, ln.getAttribute('data-b'));
      ln.setAttribute('x1', a[0]); ln.setAttribute('y1', a[1]); ln.setAttribute('x2', b[0]); ln.setAttribute('y2', b[1]);
    });
    var amb = svg.querySelector('.sia-ambient');
    amb.textContent = '';
    L.amb.forEach(function (d) {
      var c = center(L, d[3]);
      var ln = document.createElementNS(SVGNS, 'line');
      ln.setAttribute('class', 'ghost');
      ln.setAttribute('x1', d[0]); ln.setAttribute('y1', d[1]); ln.setAttribute('x2', c[0]); ln.setAttribute('y2', c[1]);
      amb.insertBefore(ln, amb.firstChild);
      var dot = document.createElementNS(SVGNS, 'circle');
      dot.setAttribute('class', 'dot');
      dot.setAttribute('cx', d[0]); dot.setAttribute('cy', d[1]); dot.setAttribute('r', d[2]);
      amb.appendChild(dot);
    });
    drawWires();
  }

  // Lines from Current Context and the basecamp into Claude's morning reply.
  function drawWires() {
    var L = LAYOUTS[layoutName];
    var st = stage.getBoundingClientRect();
    var sv = svg.getBoundingClientRect();
    var bb = target.getBoundingClientRect();
    if (!st.width || !sv.width) return;
    var k = sv.width / L.vb[0];
    wiresSvg.setAttribute('viewBox', '0 0 ' + st.width + ' ' + st.height);
    ['cc', 'hub'].forEach(function (key, n) {
      var p = L.pos[key], a = L.wire[key];
      var sx = sv.left - st.left + (p[0] + a[0]) * k;
      var sy = sv.top - st.top + (p[1] + a[1]) * k;
      var d;
      if (L.wire.dir === 'left') {
        var gx = sv.left - st.left - 4;
        var bx = bb.right - st.left - 2;
        var by = bb.top - st.top + bb.height * (n ? 0.66 : 0.34);
        d = 'M' + sx + ' ' + sy + ' H' + gx + ' C' + (gx - 40) + ' ' + sy + ' ' + (bx + 40) + ' ' + by + ' ' + bx + ' ' + by;
      } else {
        var gy = sv.top - st.top - 4;
        var ex = bb.left - st.left + bb.width * (n ? 0.62 : 0.3);
        var ey = bb.bottom - st.top + 2;
        d = 'M' + sx + ' ' + sy + ' V' + gy + ' C' + sx + ' ' + (gy - 40) + ' ' + ex + ' ' + (ey + 40) + ' ' + ex + ' ' + ey;
      }
      els[key === 'cc' ? 'wCc' : 'wHub'].setAttribute('d', d);
    });
  }

  function setStates(i) {
    var step = STEPS[i];
    Object.keys(BASE).forEach(function (k) {
      var v = (step.s[k] || BASE[k]).split('@');
      els[k].setAttribute('data-s', v[0]);
      els[k].style.setProperty('--d', (v[1] || '0') + 's');
    });
  }

  function render(i) {
    cur = i;
    var n = i + 1;
    sessions.forEach(function (s) {
      s.classList.toggle('is-active', n >= +s.getAttribute('data-first') && n <= +s.getAttribute('data-last'));
    });
    bubbles.forEach(function (b) { b.classList.remove('is-new'); });
    void root.offsetWidth; // lets the arrival animations start over
    bubbles.forEach(function (b) {
      var from = +b.getAttribute('data-from');
      b.classList.toggle('is-later', from > n);
      if (from === n) {
        b.classList.add('is-new');
        b.style.setProperty('--d', b.getAttribute('data-d') + 's');
        if (b.hasAttribute('data-t')) b.style.setProperty('--t', b.getAttribute('data-t') + 's');
      }
    });
    setStates(i);
    dots.forEach(function (d, j) {
      if (j === i) d.setAttribute('aria-current', 'step'); else d.removeAttribute('aria-current');
    });
    root.setAttribute('data-step', String(n));
    caption.innerHTML = '<span class="sia-count">Step ' + n + ' of ' + STEPS.length + '</span>' +
      '<strong>' + escapeHtml(STEPS[i].title) + '</strong> ' + escapeHtml(STEPS[i].text);
  }

  // Play the current step from its start the first time the diagram comes into view.
  function replay() {
    root.classList.add('is-instant');
    setStates(cur === 0 ? 0 : cur - 1);
    void root.offsetWidth;
    root.classList.remove('is-instant');
    render(cur);
  }

  function schedule() {
    clearTimeout(timer);
    timer = null;
    if (playing && visible && !document.hidden) {
      timer = setTimeout(function () {
        render((cur + 1) % STEPS.length);
        schedule();
      }, STEPS[cur].dur);
    }
  }

  function setPlaying(p) {
    playing = p;
    toggleLabel.textContent = p ? 'Pause' : 'Play';
    toggleIcon.innerHTML = p ? PAUSE_ICON : PLAY_ICON;
    toggleIcon.classList.toggle('fill', !p);
    root.classList.toggle('is-paused', !p);
    schedule();
  }

  function go(i) {
    setPlaying(false);
    render((i + STEPS.length) % STEPS.length);
  }

  root.querySelector('[data-act="back"]').addEventListener('click', function () { go(cur - 1); });
  root.querySelector('[data-act="next"]').addEventListener('click', function () { go(cur + 1); });
  toggle.addEventListener('click', function () { setPlaying(!playing); });
  dots.forEach(function (d) {
    d.addEventListener('click', function () { go(parseInt(d.getAttribute('data-go'), 10)); });
  });

  if (!visible) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      root.classList.toggle('is-idle', !visible);
      if (visible && !seen) { seen = true; if (playing) replay(); }
      schedule();
    }, { threshold: 0.3 }).observe(root);
  }
  document.addEventListener('visibilitychange', schedule);
  if (reduce) {
    var onReduce = function () { if (reduce.matches) setPlaying(false); };
    if (reduce.addEventListener) reduce.addEventListener('change', onReduce);
    else if (reduce.addListener) reduce.addListener(onReduce);
  }
  if (wideMq) {
    if (wideMq.addEventListener) wideMq.addEventListener('change', applyLayout);
    else if (wideMq.addListener) wideMq.addListener(applyLayout);
  }
  var resizeTimer = null;
  window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(drawWires, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawWires);

  // Switch from the no-script view (the last step plus a text list) to the player, without animating the jump.
  list.hidden = true;
  root.classList.add('is-instant');
  applyLayout();
  render(0);
  capbox.hidden = false;
  controls.hidden = false;
  drawWires();
  void root.offsetWidth;
  root.classList.remove('is-instant');
  if (!visible) root.classList.add('is-idle');
  setPlaying(playing);
})();
