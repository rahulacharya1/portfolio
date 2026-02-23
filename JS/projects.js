const projects = [
    {
        title: "Swiggy Clone",
        description: "Swiggy UI clone built using HTML, Tailwind CSS.",
        image: "Images/Projects/1.png",
        github: "https://github.com/rahulacharya1/Swiggy-Clone"
    },
    {
        title: "Spotify Clone",
        description: "Spotify UI clone built using HTML, CSS.",
        image: "Images/Projects/3.png",
        github: "https://github.com/rahulkumaracharya199-prog/SpotifyClone"
    },
    {
        title: "Amazon Clone",
        description: "Amazon UI built using HTML, CSS.",
        image: "Images/Projects/2.png",
        github: "https://github.com/rahulkumaracharya199-prog/Amazon-Clone"
    },
    {
        title: "Calculator",
        description: "Responsive Calculator built using HTML, Tailwind CSS, and JavaScript.",
        image: "Images/Projects/4.png",
        github: "https://github.com/rahulkumaracharya199-prog/calculator-web-project"
    },
    {
        title: "Password Strength Checker",
        description: "Responsive Password Checker built using HTML, Tailwind CSS, and JavaScript.",
        image: "Images/Projects/5.png",
        github: "https://github.com/rahulkumaracharya199-prog/password-strength-checker"
    },
    {
        title: "Tic Tac Toe Game",
        description: "Responsive Tic Tac Toe game built with HTML, Tailwind CSS, and JavaScript.",
        image: "Images/Projects/6.png",
        github: "https://github.com/rahulkumaracharya199-prog/tic-tac-toe"
    },
    {
        title: "Foodie House POS System",
        description: "Modern Restaurant (POS) system built with HTML, Tailwind CSS, and JavaScript.",
        image: "Images/Projects/7.png",
        github: "https://github.com/rahulkumaracharya199-prog/foodie-house-pos"
    },
    {
        title: "Personal Portfolio Website",
        description: "A fully responsive Personal Portfolio built with HTML, Tailwind CSS, and JavaScript.",
        image: "Images/Projects/8.png",
        github: "https://github.com/rahulkumaracharya199-prog/portfolio"
    },

];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    container.innerHTML += `
        <div class="bg-slate-800 rounded-2xl overflow-hidden shadow-lg 
                    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <img src="${project.image}" alt="${project.title}"
                 class="w-full h-48 object-cover bg-slate-700" />

            <div class="p-6">
                <h3 class="text-xl font-semibold text-sky-400 mb-2">
                    ${project.title}
                </h3>

                <p class="text-gray-400 mb-2 text-md h-12">
                    ${project.description}
                </p>

                <a href="${project.github}" target="_blank"
                   class="text-sky-400 font-semibold hover:underline">
                    GitHub
                </a>
            </div>
        </div>
    `;
});


/* Mobile Menu */

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
