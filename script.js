// ========== Smooth scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close TOC on mobile after clicking a link
        const toc = document.getElementById('toc');
        if (toc && window.innerWidth < 1100) {
            toc.classList.remove('open');
        }
    });
});

// ========== TOC toggle ==========
const tocToggle = document.querySelector('.toc-toggle');
const toc = document.getElementById('toc');

if (tocToggle && toc) {
    tocToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toc.classList.toggle('open');
    });

    // Close TOC when clicking outside
    document.addEventListener('click', function (e) {
        if (!toc.contains(e.target)) {
            toc.classList.remove('open');
        }
    });
}

// ========== TOC active section highlight on scroll ==========
const tocLinks = document.querySelectorAll('.toc-link');
const sections = [];

tocLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
            sections.push({ el: section, link: link });
        }
    }
});

function updateActiveSection() {
    const scrollPos = window.scrollY + 120;

    let current = sections[0];
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].el.offsetTop <= scrollPos) {
            current = sections[i];
        }
    }

    tocLinks.forEach(link => link.classList.remove('active'));
    if (current) {
        current.link.classList.add('active');
    }
}

let scrollTicking = false;
window.addEventListener('scroll', function () {
    if (!scrollTicking) {
        requestAnimationFrame(function () {
            updateActiveSection();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

// Run on load
updateActiveSection();

// ========== Hero graph: highlight connected nodes on hover ==========
(function() {
    const svg = document.querySelector('.graph-svg');
    if (!svg) return;

    const nodes = svg.querySelectorAll('.graph-node');
    const lines = svg.querySelectorAll('.graph-line:not(.cross-link)');
    const crossLinks = svg.querySelectorAll('.cross-link');

    // Build adjacency from line endpoints matching node circle centers
    function getNodeCenter(node) {
        const circle = node.querySelector('circle');
        return { x: parseFloat(circle.getAttribute('cx')), y: parseFloat(circle.getAttribute('cy')) };
    }

    function dist(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }

    function findNodeAt(x, y) {
        let closest = null, minD = 50;
        nodes.forEach(n => {
            const c = getNodeCenter(n);
            const d = dist(c, { x, y });
            if (d < minD) { minD = d; closest = n; }
        });
        return closest;
    }

    // Build connections map
    const connections = new Map();
    nodes.forEach(n => connections.set(n, { nodes: new Set(), lines: new Set() }));

    [...lines, ...crossLinks].forEach(line => {
        const x1 = parseFloat(line.getAttribute('x1'));
        const y1 = parseFloat(line.getAttribute('y1'));
        const x2 = parseFloat(line.getAttribute('x2'));
        const y2 = parseFloat(line.getAttribute('y2'));
        const n1 = findNodeAt(x1, y1);
        const n2 = findNodeAt(x2, y2);
        if (n1 && n2) {
            connections.get(n1).nodes.add(n2);
            connections.get(n1).lines.add(line);
            connections.get(n2).nodes.add(n1);
            connections.get(n2).lines.add(line);
        }
    });

    nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const conn = connections.get(node);
            // Dim everything
            nodes.forEach(n => { n.style.opacity = '0.25'; n.style.transition = 'opacity 0.3s'; });
            lines.forEach(l => { l.style.opacity = '0.04'; l.style.transition = 'opacity 0.3s'; });
            crossLinks.forEach(l => { l.style.opacity = '0.03'; l.style.transition = 'opacity 0.3s'; });

            // Highlight hovered node
            node.style.opacity = '1';
            // Highlight connected nodes and lines
            conn.nodes.forEach(n => { n.style.opacity = '1'; });
            conn.lines.forEach(l => { l.style.opacity = '0.5'; l.style.strokeWidth = '2.5'; l.style.transition = 'opacity 0.3s, stroke-width 0.3s'; });
        });

        node.addEventListener('mouseleave', () => {
            // Restore everything
            nodes.forEach(n => { n.style.opacity = ''; n.style.transition = ''; });
            lines.forEach(l => { l.style.opacity = ''; l.style.strokeWidth = ''; l.style.transition = ''; });
            crossLinks.forEach(l => { l.style.opacity = ''; l.style.strokeWidth = ''; l.style.transition = ''; });
        });
    });
})();

// ========== FAQ accordion ==========
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function () {
        const item = this.parentElement;
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('open');
        });

        // Open clicked one (if it wasn't already open)
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});
