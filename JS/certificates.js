const certificates = [
    "Images/Certificates/1.jpg",
    "Images/Certificates/2.jpg",
    "Images/Certificates/3.jpg",
    "Images/Certificates/10.jpg",
    "Images/Certificates/4.jpg",
    "Images/Certificates/5.jpg",
    "Images/Certificates/6.jpg",
    "Images/Certificates/7.jpg",
    "Images/Certificates/8.jpg",
    "Images/Certificates/9.jpg"
];

const container = document.getElementById("certificates-container");

certificates.forEach(src => {
    container.innerHTML += `
        <div onclick="openImg('${src}')"
            class="bg-slate-800 rounded-xl overflow-hidden cursor-pointer 
                   hover:scale-105 transition duration-300">
            <img src="${src}"
                class="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover">
        </div>
    `;
});

/* Popup Functions */
function openImg(src) {
    document.getElementById("popup-img").src = src;
    document.getElementById("popup").classList.remove("hidden");
}

function closeImg() {
    document.getElementById("popup").classList.add("hidden");
}

/* Mobile Menu */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
