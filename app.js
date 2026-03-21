/* ================================================
   RED NEXUS ACADEMY — Blog Engine
   ================================================
   
   TO ADD A NEW BLOG POST:
   Simply add a new object to the BLOG_POSTS array below.
   The site will automatically:
   - Show it in the grid
   - Update category counts
   - Make it searchable
   - Update trending tags

   TEMPLATE:
   {
     title: "Your Post Title",
     excerpt: "A brief description of the post...",
     category: "Category Name",
     tags: ["Tag1", "Tag2"],
     author: { name: "AuthorName", role: "Role/Title" },
     date: "Mar 15, 2026",
     featured: false,   // Set ONE post to true for the hero
     readTime: "8 min"
   }
   ================================================ */

const BLOG_POSTS = [
  {
    title: "Bloodhound Deep Dive: Installation and Enumeration",
    excerpt: "A comprehensive guide to installing BloodHound, running SharpHound collectors, and visualizing Active Directory attack paths for effective domain reconnaissance.",
    category: "Active Directory",
    tags: ["ActiveDirectory", "BloodHound", "SharpHound"],
    author: { name: "RedTeamLead", role: "Senior Instructor" },
    date: "Dec 06, 2025",
    featured: true,
    readTime: "15 min"
  },
  {
    title: "HackTheBox: Insomnia",
    excerpt: "Full walkthrough of the HTB Insomnia box — a hard-rated Windows machine featuring Active Directory enumeration, Kerberoasting, and lateral movement via PSRemoting.",
    category: "CTF Walkthroughs",
    tags: ["HTB", "Walkthrough", "Kerberoasting"],
    author: { name: "0xShadow", role: "CTF Player" },
    date: "Nov 28, 2025",
    featured: false,
    readTime: "12 min"
  },
  {
    title: "IDOR to Account Takeover",
    excerpt: "How I chained an IDOR vulnerability with a logic flaw to escalate from a regular user to full admin account takeover on a bug bounty target.",
    category: "Bug Bounty",
    tags: ["BugBounty", "IDOR", "WebSecurity"],
    author: { name: "HunterX", role: "Bug Hunter" },
    date: "Nov 20, 2025",
    featured: false,
    readTime: "8 min"
  },
  {
    title: "Detecting Cobalt Strike Beacons",
    excerpt: "Learn to identify Cobalt Strike beacons through memory analysis, network traffic patterns, and behavioral indicators — essential skills for SOC analysts.",
    category: "Blue Team",
    tags: ["BlueTeam", "Detection", "CobaltStrike"],
    author: { name: "BlueSentinel", role: "SOC Analyst" },
    date: "Nov 15, 2025",
    featured: false,
    readTime: "10 min"
  },
  {
    title: "Automating Recon with Bash",
    excerpt: "Build a comprehensive reconnaissance automation script using Bash — covering subdomain enumeration, port scanning, service fingerprinting, and output parsing.",
    category: "Red Teaming",
    tags: ["Bash", "Automation", "Recon"],
    author: { name: "ScriptKiddieNoMore", role: "Red Teamer" },
    date: "Nov 10, 2025",
    featured: false,
    readTime: "9 min"
  },
  {
    title: "Exploiting Deserialization in Java Applications",
    excerpt: "Deep dive into Java deserialization vulnerabilities — from finding gadget chains to crafting payloads using ysoserial and achieving remote code execution.",
    category: "Web Exploitation",
    tags: ["Java", "Deserialization", "RCE"],
    author: { name: "0xShadow", role: "CTF Player" },
    date: "Nov 05, 2025",
    featured: false,
    readTime: "14 min"
  },
  {
    title: "HackTheBox: Cerberus",
    excerpt: "Walkthrough of HTB Cerberus — leveraging Icinga Web 2 CVE, pivoting through Active Directory with resource-based constrained delegation.",
    category: "CTF Walkthroughs",
    tags: ["HTB", "Walkthrough", "RBCD"],
    author: { name: "0xShadow", role: "CTF Player" },
    date: "Oct 30, 2025",
    featured: false,
    readTime: "11 min"
  },
  {
    title: "Source Code Review: Finding SQLi in PHP",
    excerpt: "A methodical approach to source code review for SQL injection vulnerabilities in PHP applications — patterns, sinks, and taint analysis techniques.",
    category: "Source Code Review",
    tags: ["PHP", "SQLi", "CodeReview"],
    author: { name: "CodeAuditor", role: "AppSec Engineer" },
    date: "Oct 25, 2025",
    featured: false,
    readTime: "13 min"
  },
  {
    title: "Building a C2 Framework from Scratch",
    excerpt: "Step-by-step guide to building a basic command and control framework using Python — understanding implant design, communication protocols, and evasion.",
    category: "Red Teaming",
    tags: ["C2", "Python", "RedTeam"],
    author: { name: "RedTeamLead", role: "Senior Instructor" },
    date: "Oct 20, 2025",
    featured: false,
    readTime: "18 min"
  },
  {
    title: "Windows Privilege Escalation Cheat Sheet",
    excerpt: "A comprehensive reference for Windows privilege escalation — covering service misconfigurations, token abuse, UAC bypass, and kernel exploits.",
    category: "Network Pentesting",
    tags: ["PrivEsc", "Windows", "Pentesting"],
    author: { name: "ScriptKiddieNoMore", role: "Red Teamer" },
    date: "Oct 15, 2025",
    featured: false,
    readTime: "20 min"
  },
  {
    title: "CVE-2025-1337: Critical RCE in Popular CMS",
    excerpt: "Technical analysis of CVE-2025-1337 — a critical remote code execution vulnerability discovered in a widely-used content management system affecting millions.",
    category: "Web Exploitation",
    tags: ["CVE-2025-1337", "RCE", "CMS"],
    author: { name: "HunterX", role: "Bug Hunter" },
    date: "Oct 10, 2025",
    featured: false,
    readTime: "7 min"
  },
  {
    title: "OSCP Preparation Guide 2025",
    excerpt: "Everything you need to know to pass the OSCP exam — study plan, recommended labs, methodology tips, and exam-day strategies from certified professionals.",
    category: "CTF Walkthroughs",
    tags: ["OSCP", "Certification", "StudyGuide"],
    author: { name: "RedTeamLead", role: "Senior Instructor" },
    date: "Oct 05, 2025",
    featured: false,
    readTime: "16 min"
  },
  {
    title: "Threat Hunting with Sigma Rules",
    excerpt: "Learn to write and deploy Sigma detection rules for threat hunting across SIEM platforms — covering log sources, rule syntax, and real-world detection scenarios.",
    category: "Blue Team",
    tags: ["BlueTeam", "Sigma", "ThreatHunting"],
    author: { name: "BlueSentinel", role: "SOC Analyst" },
    date: "Sep 28, 2025",
    featured: false,
    readTime: "11 min"
  },
  {
    title: "API Security Testing Methodology",
    excerpt: "A structured approach to testing REST and GraphQL APIs for security vulnerabilities — authentication bypass, BOLA, mass assignment, and rate limiting issues.",
    category: "Bug Bounty",
    tags: ["API", "BugBounty", "BOLA"],
    author: { name: "HunterX", role: "Bug Hunter" },
    date: "Sep 22, 2025",
    featured: false,
    readTime: "10 min"
  },
  {
    title: "Active Directory Certificate Services Abuse",
    excerpt: "Exploiting misconfigured AD CS templates for privilege escalation — ESC1 through ESC8 attack paths with Certipy and real-world case studies.",
    category: "Active Directory",
    tags: ["ADCS", "Certipy", "PrivEsc"],
    author: { name: "RedTeamLead", role: "Senior Instructor" },
    date: "Sep 15, 2025",
    featured: false,
    readTime: "17 min"
  }
];

/* ================================================
   TRENDING TAGS — Automatically extracted or manual
   ================================================ */

const TRENDING_TAGS = [
  "CVE-2025-1337", "BurpSuite", "Python", "PrivEsc",
  "Metasploit", "BloodHound", "OSCP", "Kerberoasting"
];

/* ================================================
   CATEGORY ICON PATTERNS (SVG for card backgrounds)
   ================================================ */

const CATEGORY_ICONS = {
  "CTF Walkthroughs": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><path d="M60 10v100M10 60h100M30 30l60 60M90 30L30 90"/><circle cx="60" cy="60" r="30"/><circle cx="60" cy="60" r="50"/></svg>`,
  "Web Exploitation": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><rect x="15" y="25" width="90" height="70" rx="4"/><line x1="15" y1="45" x2="105" y2="45"/><circle cx="28" cy="35" r="3"/><circle cx="40" cy="35" r="3"/><circle cx="52" cy="35" r="3"/><path d="M35 65l15-10 15 10M75 60l10 5-10 5"/></svg>`,
  "Network Pentesting": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><circle cx="60" cy="30" r="12"/><circle cx="30" cy="80" r="12"/><circle cx="90" cy="80" r="12"/><line x1="60" y1="42" x2="30" y2="68"/><line x1="60" y1="42" x2="90" y2="68"/><line x1="42" y1="80" x2="78" y2="80"/></svg>`,
  "Red Teaming": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><path d="M60 20L20 100h80z"/><line x1="60" y1="55" x2="60" y2="75"/><circle cx="60" cy="85" r="3"/></svg>`,
  "Source Code Review": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><path d="M40 40L20 60l20 20"/><path d="M80 40l20 20-20 20"/><line x1="70" y1="30" x2="50" y2="90"/></svg>`,
  "Bug Bounty": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><circle cx="60" cy="55" r="30"/><path d="M35 40c0-15 50-15 50 0"/><line x1="60" y1="25" x2="60" y2="15"/><line x1="30" y1="55" x2="20" y2="55"/><line x1="90" y1="55" x2="100" y2="55"/><line x1="35" y1="40" x2="25" y2="30"/><line x1="85" y1="40" x2="95" y2="30"/><line x1="38" y1="78" x2="28" y2="90"/><line x1="82" y1="78" x2="92" y2="90"/></svg>`,
  "Blue Team": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><path d="M60 15L25 35v30c0 25 35 40 35 40s35-15 35-40V35z"/><path d="M45 60l10 10 20-20"/></svg>`,
  "Active Directory": `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1"><rect x="40" y="15" width="40" height="25" rx="3"/><rect x="15" y="80" width="30" height="25" rx="3"/><rect x="75" y="80" width="30" height="25" rx="3"/><line x1="60" y1="40" x2="60" y2="60"/><line x1="60" y1="60" x2="30" y2="80"/><line x1="60" y1="60" x2="90" y2="80"/></svg>`
};

/* ================================================
   ENGINE — Do not modify below unless needed
   ================================================ */

// State
let currentCategory = 'all';
let searchQuery = '';

// DOM refs
const blogGrid = document.getElementById('blog-grid');
const featuredCard = document.getElementById('featured-card');
const featuredSection = document.getElementById('featured-section');
const categoryList = document.getElementById('category-list');
const trendingTags = document.getElementById('trending-tags');
const searchInput = document.getElementById('search-input');
const categoryPills = document.querySelector('.category-pills');
const emptyState = document.getElementById('empty-state');
const blogSection = document.querySelector('.blog-section');

// Build categories from posts
function getCategories() {
  const cats = {};
  BLOG_POSTS.forEach(p => {
    cats[p.category] = (cats[p.category] || 0) + 1;
  });
  return Object.entries(cats).sort((a, b) => b[1] - a[1]);
}

// Get author initials
function getInitials(name) {
  return name.split(/(?=[A-Z0-9])/).map(s => s[0]).join('').slice(0, 2).toUpperCase();
}

// Format category icon SVG
function getCategoryIcon(category) {
  return CATEGORY_ICONS[category] || CATEGORY_ICONS["CTF Walkthroughs"];
}

// Render featured post
function renderFeatured() {
  const post = BLOG_POSTS.find(p => p.featured);
  if (!post) {
    featuredSection.hidden = true;
    return;
  }

  const shouldShow = currentCategory === 'all' || currentCategory === post.category;
  const matchesSearch = !searchQuery || 
    post.title.toLowerCase().includes(searchQuery) ||
    post.excerpt.toLowerCase().includes(searchQuery) ||
    post.tags.some(t => t.toLowerCase().includes(searchQuery));

  featuredSection.hidden = !(shouldShow && matchesSearch);

  featuredCard.innerHTML = `
    <div class="featured-image">
      <canvas id="network-canvas"></canvas>
      <span class="featured-badge">Featured</span>
    </div>
    <div class="featured-content">
      <div class="featured-meta">
        <span class="featured-tag">${post.category}</span>
        <span class="featured-date">${post.date} · ${post.readTime} read</span>
      </div>
      <h2 class="featured-title">${post.title}</h2>
      <p class="featured-excerpt">${post.excerpt}</p>
      <div class="featured-author">
        <div class="author-avatar">${getInitials(post.author.name)}</div>
        <div class="author-info">
          <span class="author-name">${post.author.name}</span>
          <span class="author-role">${post.author.role}</span>
        </div>
      </div>
    </div>
  `;

  // Draw network animation
  if (!featuredSection.hidden) {
    requestAnimationFrame(() => initNetworkCanvas());
  }
}

// Network canvas animation for featured post
function initNetworkCanvas() {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * 2;
  canvas.height = rect.height * 2;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  ctx.scale(2, 2);

  const nodes = [];
  const nodeCount = 30;
  const w = rect.width;
  const h = rect.height;

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.25;
          ctx.strokeStyle = `rgba(220, 38, 38, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.fillStyle = 'rgba(220, 38, 38, 0.6)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();

      // Move
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// Render blog cards
function renderPosts() {
  const posts = BLOG_POSTS.filter(p => {
    if (p.featured) return false; // Featured is shown separately
    const matchesCat = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.excerpt.toLowerCase().includes(searchQuery) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery)) ||
      p.author.name.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (posts.length === 0) {
    blogSection.hidden = true;
    emptyState.hidden = false;
  } else {
    blogSection.hidden = false;
    emptyState.hidden = true;
  }

  blogGrid.innerHTML = posts.map(post => `
    <article class="blog-card" tabindex="0" role="article">
      <div class="card-image">
        <div class="card-pattern" style="color: var(--color-primary);">${getCategoryIcon(post.category)}</div>
        <span class="card-category-badge">${post.category}</span>
      </div>
      <div class="card-content">
        <div class="card-tags">
          ${post.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-excerpt">${post.excerpt}</p>
        <div class="card-footer">
          <div class="card-author">
            <div class="card-author-avatar">${getInitials(post.author.name)}</div>
            <span class="card-author-name">${post.author.name}</span>
          </div>
          <span class="card-date">${post.date}</span>
        </div>
      </div>
    </article>
  `).join('');
}

// Render sidebar categories
function renderCategories() {
  const cats = getCategories();

  // Sidebar list
  categoryList.innerHTML = cats.map(([name, count]) => `
    <li data-category="${name}">
      <span class="cat-name">${name}</span>
      <span class="cat-count">${count}</span>
    </li>
  `).join('');

  // Click handlers
  categoryList.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      currentCategory = li.dataset.category;
      updatePills();
      renderFeatured();
      renderPosts();
    });
  });

  // Hero pills
  const existingPills = categoryPills.querySelectorAll('.pill:not([data-category="all"])');
  existingPills.forEach(p => p.remove());

  cats.forEach(([name]) => {
    const btn = document.createElement('button');
    btn.className = 'pill';
    btn.dataset.category = name;
    btn.textContent = name;
    btn.addEventListener('click', () => {
      currentCategory = name;
      updatePills();
      renderFeatured();
      renderPosts();
    });
    categoryPills.appendChild(btn);
  });

  // "All Posts" pill handler
  const allPill = categoryPills.querySelector('[data-category="all"]');
  allPill.addEventListener('click', () => {
    currentCategory = 'all';
    updatePills();
    renderFeatured();
    renderPosts();
  });
}

function updatePills() {
  categoryPills.querySelectorAll('.pill').forEach(p => {
    p.classList.toggle('active', p.dataset.category === currentCategory);
  });
}

// Render trending tags
function renderTrendingTags() {
  trendingTags.innerHTML = TRENDING_TAGS.map(tag => `
    <button class="trend-tag" data-tag="${tag}">${tag}</button>
  `).join('');

  trendingTags.querySelectorAll('.trend-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      searchInput.value = btn.dataset.tag;
      searchQuery = btn.dataset.tag.toLowerCase();
      currentCategory = 'all';
      updatePills();
      renderFeatured();
      renderPosts();
      searchInput.focus();
    });
  });
}

// Search
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderFeatured();
  renderPosts();
});

// Keyboard shortcut: "/" to focus search
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    searchQuery = '';
    searchInput.blur();
    renderFeatured();
    renderPosts();
  }
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', isOpen);
  mobileNav.setAttribute('aria-hidden', !isOpen);
});

// Header scroll behavior
let lastScroll = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 100) {
    header.style.boxShadow = 'var(--shadow-md)';
  } else {
    header.style.boxShadow = 'none';
  }
  lastScroll = current;
}, { passive: true });

// Initialize
renderCategories();
renderFeatured();
renderPosts();
renderTrendingTags();
