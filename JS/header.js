/**
 * Shared Header Component
 * Auto-detects the current page and highlights the active nav link.
 * Injects the header, mobile menu, and mobile toggle logic into every page.
 */

(function () {
    const navLinks = [
        { label: "Home", href: "home.html" },
        { label: "About", href: "about.html" },
        { label: "Skills", href: "skills.html" },
        { label: "Projects", href: "projects.html" },
        { label: "Certificates", href: "certificates.html" },
        { label: "Contact", href: "contact.html" },
    ];

    // Detect the current page filename from the URL
    const currentPage = window.location.pathname.split("/").pop() || "home.html";

    // --- Build Desktop Nav Links ---
    const desktopLinksHTML = navLinks.map(link => {
        const isActive = currentPage === link.href;
        const cls = isActive ? "text-sky-400 transition" : "hover:text-sky-400 transition";
        return `<a href="${link.href}" class="${cls}">${link.label}</a>`;
    }).join("\n                ");

    // --- Build Mobile Nav Links ---
    const mobileLinksHTML = navLinks.map(link => {
        const isActive = currentPage === link.href;
        const cls = isActive
            ? "text-sky-400 py-2 border-b border-slate-800"
            : "py-2 border-b border-slate-800";
        return `<a href="${link.href}" class="${cls}">${link.label}</a>`;
    }).join("\n        ");

    // --- Header HTML ---
    const headerHTML = `
    <header class="fixed top-0 w-full z-50 glass border-b border-slate-800" id="site-header">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 class="text-2xl font-bold tracking-tighter">
                <a href="home.html"><span class="text-sky-400">RAHUL</span><span class="text-white">.ACHARYA</span></a>
            </h1>

            <nav class="hidden md:flex items-center space-x-8 font-medium">
                ${desktopLinksHTML}
                <a href="assets/resume.pdf" target="_blank" class="px-4 py-2 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-slate-900 transition text-sm font-bold">
                    RESUME
                </a>
            </nav>

            <button id="menu-btn" class="md:hidden text-2xl text-sky-400 focus:outline-none p-2">
                <i class="fa-solid fa-bars-staggered" id="menu-icon"></i>
            </button>
        </div>
    </header>

    <nav id="mobile-menu" class="hidden fixed top-[73px] left-0 w-full bg-slate-900 border-b border-slate-800 z-40 p-8 flex flex-col gap-6 text-xl text-center shadow-2xl animate-menu">
        ${mobileLinksHTML}
        <a href="assets/resume.pdf" target="_blank" class="text-sky-400 font-bold py-2 bg-sky-400/10 rounded-lg">Resume</a>
    </nav>
    `;

    // --- Inject into the page ---
    // Insert the header at the very beginning of <body>
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // --- Mobile Menu Toggle Logic ---
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (btn && menu && menuIcon) {
        btn.addEventListener("click", () => {
            const isHidden = menu.classList.toggle("hidden");
            if (isHidden) {
                menuIcon.classList.add("fa-bars-staggered");
                menuIcon.classList.remove("fa-xmark");
            } else {
                menuIcon.classList.remove("fa-bars-staggered");
                menuIcon.classList.add("fa-xmark");
            }
        });

        // Close menu when a link is clicked
        const navLinksElements = menu.querySelectorAll("a");
        navLinksElements.forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.add("hidden");
                menuIcon.classList.add("fa-bars-staggered");
                menuIcon.classList.remove("fa-xmark");
            });
        });
    }
})();
