// Scroll To Gallery




// Countdown Timer
// عدلي التاريخ حسب عيد ميلاد Asmaa

const birthdayDate = new Date("2004-07-08 00:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(() => {

    const now = new Date().getTime();

    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    if (distance > 0) {

        timer.innerHTML =
            `${days} يوم 🎂 ${hours} ساعة ⏰ ${minutes} دقيقة 💜 ${seconds} ثانية`;

    } else {

        timer.innerHTML =
            "🎉 عيد ميلاد سعيد Asmaa 💜";

    }

}, 1000);


// Floating Hearts

const heartsContainer = document.querySelector(".floating-hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "100%";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    heart.style.opacity = Math.random();

    heart.style.animation =
        `heartFloat ${Math.random() * 5 + 5}s linear`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);


// Heart Animation

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


// Fade In Sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

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


// Gallery Click Effect

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        img.style.transform = "scale(1.15)";

        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 500);

    });

});