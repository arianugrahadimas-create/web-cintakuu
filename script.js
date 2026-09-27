const openBtn = document.getElementById("openBtn");

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");

const music = document.getElementById("music");

const typingText = document.getElementById("typingText");


/* =========================
   OPEN WEBSITE
========================= */

openBtn.addEventListener("click", () => {

    opening.style.opacity = "0";

    opening.style.transform = "scale(1.05)";

    opening.style.transition = "1s ease";

    setTimeout(() => {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo(0, 0);

        music.play().catch(() => {});

        typeWriter();

    }, 900);

});


/* =========================
   TYPING EFFECT
========================= */

const message =
    "thank you for being a beautiful part of my life.";


let index = 0;


function typeWriter() {

    if (index < message.length) {

        typingText.textContent +=
            message.charAt(index);

        index++;

        setTimeout(typeWriter, 60);

    }

}


/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.querySelector(".hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.color =
        "rgba(232, 154, 184, 0.5)";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex = "10";

    heart.style.transition =
        "transform 7s linear, opacity 7s linear";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 100}px) rotate(20deg)`;

        heart.style.opacity = "0";

    }, 100);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


setInterval(createHeart, 1200);