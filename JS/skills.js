const skills = [
    {
        title: "HTML",
        description: "Semantic markup, accessibility, SEO-friendly structure."
    },
    {
        title: "CSS",
        description: "Responsive layouts, Flexbox, Grid, animations."
    },
    {
        title: "Tailwind CSS",
        description: "Utility-first styling, rapid UI development."
    },
    {
        title: "JavaScript",
        description: "DOM manipulation, ES6+, async programming."
    },
    {
        title: "React",
        description: "Components, hooks, state management."
    },
    {
        title: "Firebase",
        description: "Authentication, Firestore, hosting basics."
    },
    {
        title: "Git",
        description: "Version control, branching, merging, collaborative workflows."
    },
    {
        title: "GitHub",
        description: "Repository hosting, pull requests, issue tracking, CI/CD."
    },
    {
        title: "C Language",
        description: "Algorithms, data structures, low-level programming."
    },
    {
        title: "Python",
        description: "Data analysis, web scraping, automation, Django."
    },
    {
        title: "Django",
        description: "Full-stack development, RESTful APIs, ORM, deployment."
    }
];

const container = document.getElementById("skills-container");

skills.forEach(skill => {
    container.innerHTML += `
        <div class="bg-slate-800 rounded-2xl p-6 shadow-lg 
                    hover:-translate-y-2 transition duration-300">
            <h3 class="text-xl font-semibold text-sky-400 mb-2">
                ${skill.title}
            </h3>
            <p class="text-gray-400">
                ${skill.description}
            </p>
        </div>
    `;
});


/* Mobile Menu */

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
