const certificates = [
    {
        src: "Images/Certificates/1.jpg",
        title: "Python Developer Intern",
        desc: "Codec Technologies - Python & database",
        date: "Dec 2025 - Jan 2026"
    },
    {
        src: "Images/Certificates/2.jpg",
        title: "Web Development Internship",
        desc: "Comestro Techlabs - HTML, CSS, JavaScript",
        date: "Dec 2025 - Jan 2026"
    },
    {
        src: "Images/Certificates/3.jpg",
        title: "Software Engineering Job Simulation",
        desc: "JP Morgan - REST APIs, Kafka integration",
        date: "Jan 2026"
    },
    {
        src: "Images/Certificates/4.jpg",
        title: "Frontend Software Engineering",
        desc: "Skyscanner - React, UI components, state handling",
        date: "Jan 2026"
    },
    {
        src: "Images/Certificates/5.jpg",
        title: "Quantium Software Engineering Simulation",
        desc: "Completed job simulation involving data processing, dashboard creation, testing, and automation.",
        date: "4 Jan 2026"
    },
    {
        src: "Images/Certificates/6.jpg",
        title: "Advanced Software Engineering",
        desc: "Walmart Global Tech - DSA & system design",
        date: "Jan 2026"
    },
    {
        src: "Images/Certificates/7.jpg",
        title: "Solutions Architecture",
        desc: "AWS - Scalable cloud architecture",
        date: "Jan 2026"
    },
    {
        src: "Images/Certificates/8.jpg",
        title: "GenAI Data Analytics",
        desc: "TATA - AI-powered analytics",
        date: "Jan 2026"
    },
    {
        src: "Images/Certificates/9.jpg",
        title: "Cybersecurity Analyst",
        desc: "TATA - IAM fundamentals & security assessment",
        date: "Jan 2026"
    },
    {
        src: "Images/Certificates/10.jpg",
        title: "Data Analytics Job Simulation",
        desc: "Deloitte - Data analysis & forensic technology",
        date: "Dec 2025"
    },
    {
        src: "Images/Certificates/11.jpg",
        title: "AI in Action",
        desc: "Forage - Prompt engineering & automation",
        date: "Jan 2026"
    },
    {
        src: "Images/Certificates/12.jpg",
        title: "Advanced AI Marketer",
        desc: "Advanced AI marketing concepts including GenAI tools, automation strategies, and modern digital growth techniques.",
        date: "6 Jan 2026"
    },
    {
        src: "Images/Certificates/13.jpg",
        title: "Full Stack Development (GenAI Era)",
        desc: "Participated in full stack development masterclass with focus on GenAI integration.",
        date: "6 Jan 2026"
    },
    {
        src: "Images/Certificates/14.jpg",
        title: "Internshala ISP 55 Webinar",
        desc: "Participated in Internshala Student Partner training webinar covering leadership, marketing, and communication skills.",
        date: "7 Jan 2026"
    },
    {
        src: "Images/Certificates/15.jpg",
        title: "Internship Common Aptitude Test (ICAT)",
        desc: "Participated in aptitude test focusing on logical reasoning, quantitative aptitude, and problem-solving skills.",
        date: "2 Jan 2026"
    },
    {
        src: "Images/Certificates/16.jpg",
        title: "Docker & Kubernetes Masterclass",
        desc: "Hands-on exposure to Docker containers, Kubernetes fundamentals, and DevOps workflows.",
        date: "29 Dec 2025"
    },
    {
        src: "Images/Certificates/18.jpg",
        title: "What Does It Take to Become a Microsoft SDE?",
        desc: "Industry-focused session covering skills, roadmap, and expectations for Microsoft SDE roles.",
        date: "31 January 2026"
    },
    {
        src: "Images/Certificates/19.jpg",
        title: "Build an E-Commerce Platform using React",
        desc: "Hands-on masterclass focused on building a scalable e-commerce application using React.",
        date: "7 February 2026"
    },
    {
        src: "Images/Certificates/17.jpg",
        title: "Beginner to Full Stack (PW)",
        desc: "Attended Physics Wallah masterclass on beginner to full stack development roadmap",
        date: "10 Jan 2026"
    },
    {
        src: "Images/Certificates/20.png",
        title: "MY Bharat Budget Quest 2026",
        desc: "Successfully participated in the online quiz 'MY Bharat Budget Quest 2026' conducted by the Ministry of Youth Affairs & Sports on MYBharat",
        date: "09 Feb 2026"
    }

];

const container = document.getElementById("certificates-container");

certificates.forEach(cert => {
    container.innerHTML += `
        <div onclick="openImg('${cert.src}')"
            class="bg-slate-800 rounded-xl overflow-hidden cursor-pointer 
                   hover:scale-105 transition duration-300 p-3">

            <img src="${cert.src}"
                class="w-full h-[220px] md:h-[260px] object-cover rounded-lg">

            <div class="mt-3 text-center">
                <h3 class="text-white font-semibold text-sm md:text-base">
                    ${cert.title}
                </h3>

                <p class="text-slate-400 text-xs md:text-sm mt-1">
                    ${cert.desc}
                </p>

                <span class="inline-block mt-2 text-xs text-cyan-400">
                    📅 ${cert.date}
                </span>
            </div>
        </div>
    `;
});

/* Popup */
function openImg(src) {
    document.getElementById("popup-img").src = src;
    document.getElementById("popup").classList.remove("hidden");
}

function closeImg() {
    document.getElementById("popup").classList.add("hidden");
}
