document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openBtn");
    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");
    const music = document.getElementById("music");
    const typingText = document.getElementById("typingText");
    const heartsContainer = document.querySelector(".hearts");


    /* =========================
       OPEN WEBSITE
    ========================= */

    if (openBtn && opening && mainContent) {

        openBtn.addEventListener("click", () => {

            opening.style.opacity = "0";
            opening.style.transform = "scale(1.05)";
            opening.style.transition = "1s ease";

            setTimeout(() => {

                opening.style.display = "none";

                mainContent.classList.remove("hidden");

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

                /* MUSIC */
                if (music) {
                    music.play().catch(() => {});
                }

                /* TYPING */
                typeWriter();

            }, 900);

        });

    }


    /* =========================
       TYPING EFFECT
    ========================= */

    const message =
        "thank you for being a beautiful part of my life.";

    let index = 0;

    function typeWriter() {

        if (!typingText) return;

        typingText.textContent = "";

        index = 0;

        function write() {

            if (index < message.length) {

                typingText.textContent +=
                    message.charAt(index);

                index++;

                setTimeout(write, 60);

            }

        }

        write();

    }


    /* =========================
       FLOATING HEARTS
    ========================= */

    function createHeart() {

        if (!heartsContainer) return;

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > 0.2 ? "♡" : "✦";

        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            (Math.random() * 15 + 10) + "px";

        heart.style.color =
            "rgba(232, 154, 184, 0.5)";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "10";

        heart.style.opacity =
            "0";

        heart.style.transition =
            "transform 7s linear, opacity 7s linear";

        heartsContainer.appendChild(heart);


        /* MULAI ANIMASI */

        requestAnimationFrame(() => {

            heart.style.opacity = "1";

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px) rotate(20deg)`;

        });


        /* HAPUS */

        setTimeout(() => {

            heart.remove();

        }, 7000);

    }


    /* HEART MUNCUL SETIAP 1.2 DETIK */

    setInterval(createHeart, 1200);


});
