const projects = [
    {
        "title": "EduMarks",
        "description": "Professional Academic Management System with dynamic marksheet generation, secure result verification, and SEO-optimized institutional portals using Django and Tailwind CSS.",
        "image": "Images/Projects/1.png",
        "github": "https://github.com/rahulacharya1/MarksheetGenerator",
        "live": "https://edumarks.acharyaworks.in/" 
    },
    {
        "title": "TechlancePrep",
        "description": "High-performance Engineering Command Center for mastering DSA and System Design. Features granular user telemetry, secure 'Identity Vault' profiles, and a robust administrative CRUD engine built with Django and Tailwind CSS.",
        "image": "Images/Projects/2.png",
        "github": "https://github.com/rahulacharya1/techlanceprep",
        "live": "https://techlanceprep.onrender.com/" 
    },
    {
        "title": "Personal Portfolio Website",
        "description": "A fully responsive Personal Portfolio built with HTML, Tailwind CSS, and JavaScript.",
        "image": "Images/Projects/8.png",
        "github": "https://github.com/rahulacharya1/portfolio",
        "live": "https://acharyarahul.in/" 
    },
    {
        "title": "Calculator",
        "description": "Responsive Calculator built using HTML, Tailwind CSS, and JavaScript.",
        "image": "Images/Projects/4.png",
        "github": "https://github.com/rahulacharya1/calculator-web-project",
        "live": ""
    },
    {
        "title": "Password Strength Checker",
        "description": "Responsive Password Checker built using HTML, Tailwind CSS, and JavaScript.",
        "image": "Images/Projects/5.png",
        "github": "https://github.com/rahulacharya1/password-strength-checker",
        "live": ""
    },
    {
        "title": "Tic Tac Toe Game",
        "description": "Responsive Tic Tac Toe game built with HTML, Tailwind CSS, and JavaScript.",
        "image": "Images/Projects/6.png",
        "github": "https://github.com/rahulacharya1/tic-tac-toe",
        "live": ""
    },
    {
        "title": "Foodie House POS System",
        "description": "Modern Restaurant (POS) system built with HTML, Tailwind CSS, and JavaScript.",
        "image": "Images/Projects/7.png",
        "github": "https://github.com/rahulacharya1/foodie-house-pos",
        "live": ""
    },
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    // Check if live link exists to show/hide the button
    const liveBtn = project.live 
        ? `<a href="${project.live}" target="_blank" class="px-4 py-2 bg-sky-500 text-slate-950 rounded-lg font-bold text-xs hover:bg-sky-400 transition-all flex items-center gap-2">
            <i class="fa-solid fa-rocket"></i> Live
           </a>` 
        : "";

    container.innerHTML += `
        <div class="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            
            <div class="relative overflow-hidden h-48 bg-slate-800">
                <img src="${project.image}" alt="${project.title}"
                     class="w-full h-full object-cover opacity-80" 
                     onerror="this.src='https://via.placeholder.com/400x200?text=Preview+Coming+Soon'"/>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>

            <div class="p-6 flex flex-col flex-1">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    ${project.title}
                </h3>

                <p class="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                    ${project.description}
                </p>

                <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                    <a href="${project.github}" target="_blank"
                       class="flex items-center gap-2 text-slate-400 font-semibold hover:text-white transition-all text-sm">
                        <i class="fa-brands fa-github text-lg"></i> GitHub
                    </a>
                    
                    ${liveBtn}
                </div>
            </div>
        </div>
    `;
});

/* Mobile Menu Logic */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    if(menuIcon) {
        menuIcon.classList.replace(isHidden ? "fa-xmark" : "fa-bars-staggered", isHidden ? "fa-bars-staggered" : "fa-xmark");
    }
});

// Simple Back to Top logic
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "fixed bottom-8 right-8 bg-sky-500 text-slate-950 w-12 h-12 rounded-full font-bold shadow-lg hidden z-50 transition-all hover:scale-110";
document.body.appendChild(topBtn);

window.onscroll = () => {
    if (window.scrollY > 500) topBtn.classList.remove("hidden");
    else topBtn.classList.add("hidden");
};

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

