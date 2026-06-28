// ===============================
// Countdown to Asmaa's Birthday
// ===============================

const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date();

    // عيد الميلاد: 8 يوليو
    let birthday = new Date(now.getFullYear(), 6, 8, 0, 0, 0);

    // إذا مرّ عيد الميلاد لهذه السنة، احسب للسنة القادمة
    if (now > birthday) {
        birthday = new Date(now.getFullYear() + 1, 6, 8, 0, 0, 0);
    }

    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    timer.innerHTML =
        `${days} يوم 🎂 ${hours} ساعة ⏰ ${minutes} دقيقة 💜 ${seconds} ثانية`;

}

updateCountdown();
setInterval(updateCountdown, 1000);


// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.querySelector(".floating-hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "100%";

    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.style.opacity = Math.random();

    heart.style.animation =
        `heartFloat ${Math.random() * 5 + 5}s linear`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 700);


// ===============================
// Heart Animation
// ===============================

const style = document.createElement("style");

style.innerHTML = `
@keyframes heartFloat{
    from{
        transform:translateY(0);
        opacity:1;
    }
    to{
        transform:translateY(-120vh);
        opacity:0;
    }
}
`;

document.head.appendChild(style);


// ===============================
// Fade In Sections
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});


// ===============================
// Gallery Click Effect
// ===============================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        img.style.transform = "scale(1.08)";

        setTimeout(() => {

            img.style.transform = "scale(1)";

        }, 300);

    });

});
