const projects = [
    {
        title: "Swiggy Clone",
        description: "Food delivery UI clone built using HTML, Tailwind CSS.",
        image: "Images/Projects/1.png",
        github: "https://github.com/rahulkumaracharya199-prog/Swiggy-Clone"
    },
    {
        title: "Spotify Clone",
        description: "Music streaming UI clone built using HTML, CSS.",
        image: "Images/Projects/3.png",
        github: "https://github.com/rahulkumaracharya199-prog/SpotifyClone"
    },
    {
        title: "Amazon Clone",
        description: "Responsive e-commerce UI built using HTML, CSS.",
        image: "Images/Projects/2.png",
        github: "https://github.com/rahulkumaracharya199-prog/Amazon-Clone"
    }
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

                <p class="text-gray-400 mb-2 text-md">
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
