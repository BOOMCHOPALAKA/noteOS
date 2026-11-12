/* noteOS Starter site: the "See it in action" diagram.
   Each step sets a state on every node, link and badge (data-s) plus a start
   delay (--d). CSS turns those into motion, so with reduced motion on, the
   same states show at once with no movement. */
(function () {
  var root = document.querySelector('.sia');
  if (!root) return;

  var STEPS = [
    {
      dur: 3200,
      title: 'You talk.',
      text: 'You ask Claude a question in plain words.',
      s: {}
    },
    {
      dur: 4200,
      title: 'It checks its notes.',
      text: 'Claude reads Current Context, opens the Channel Basecamp, reads its Compass, then follows the Trails to the notes it needs.',
      s: {
        cc: 'lit@0.1', dCchub: 'on@0.3', hub: 'lit@0.6', compass: 'on@0.8',
        dIdeas: 'on@1.0', dCheck: 'on@1.1', dLast: 'on@1.2',
        ideas: 'lit@1.3', check: 'lit@1.4', last: 'lit@1.5'
      }
    },
    {
      dur: 4200,
      title: 'You say /remember.',
      text: "Claude logs the session in today's daily note, adds a new Video 12 plan note (it asks first), links both to the basecamp and updates Current Context.",
      s: {
        hub: 'lit', plan: 'lit@0.4', daily: 'lit@0.6',
        dPlan: 'on@0.9', dDaily: 'on@1.0', dCcplan: 'on@1.3',
        cc: 'lit@1.5', badge: 'on@1.5'
      }
    },
    {
      dur: 4500,
      title: 'Next morning, /pickup.',
      text: 'Claude reads Current Context and your latest daily note, then tells you where you left off.',
      s: {
        cc: 'lit@0.4', hub: 'dim', ideas: 'dim', check: 'dim', last: 'dim',
        dCcplan: 'on@0.7', plan: 'lit@1.0', daily: 'lit@1.15',
        dPlan: 'settled', dDaily: 'settled'
      }
    }
  ];
  // Resting state for anything a step does not mention.
  var BASE = {
    cc: 'rest', hub: 'rest', ideas: 'rest', check: 'rest', last: 'rest',
    plan: 'hidden', daily: 'hidden', compass: 'off', badge: 'off',
    dCchub: 'off', dIdeas: 'off', dCheck: 'off', dLast: 'off',
    dPlan: 'off', dDaily: 'off', dCcplan: 'off'
  };

  var els = {};
  root.querySelectorAll('[data-k]').forEach(function (el) { els[el.getAttribute('data-k')] = el; });
  var groups = root.querySelectorAll('.sia-turns');
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

  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var cur = 0;
  var playing = !(reduce && reduce.matches);
  var visible = !('IntersectionObserver' in window);
  var timer = null;

  function escapeHtml(s) {
    return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  function render(i) {
    cur = i;
    var step = STEPS[i];
    Object.keys(els).forEach(function (k) {
      var v = (step.s[k] || BASE[k] || 'off').split('@');
      els[k].setAttribute('data-s', v[0]);
      els[k].style.setProperty('--d', (v[1] || '0') + 's');
    });
    groups.forEach(function (g, j) { g.classList.toggle('is-active', j === i); });
    dots.forEach(function (d, j) {
      if (j === i) d.setAttribute('aria-current', 'step'); else d.removeAttribute('aria-current');
    });
    root.setAttribute('data-step', String(i + 1));
    caption.innerHTML = '<span class="sia-count">Step ' + (i + 1) + ' of ' + STEPS.length + '</span>' +
      '<strong>' + escapeHtml(step.title) + '</strong> ' + escapeHtml(step.text);
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
      schedule();
    }, { threshold: 0.3 }).observe(root);
  }
  document.addEventListener('visibilitychange', schedule);
  if (reduce) {
    var onReduce = function () { if (reduce.matches) setPlaying(false); };
    if (reduce.addEventListener) reduce.addEventListener('change', onReduce);
    else if (reduce.addListener) reduce.addListener(onReduce);
  }

  // Switch from the no-script view (step 3 plus a text list) to the player, without animating the jump.
  list.hidden = true;
  root.classList.add('is-instant');
  render(0);
  capbox.hidden = false;
  controls.hidden = false;
  void root.offsetWidth;
  root.classList.remove('is-instant');
  if (!visible) root.classList.add('is-idle');
  setPlaying(playing);
})();
