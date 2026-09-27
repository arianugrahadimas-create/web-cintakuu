document.addEventListener("DOMContentLoaded", () => {

    const opening =
        document.getElementById("opening");

    const openBtn =
        document.getElementById("openBtn");

    const main =
        document.getElementById("main");

    const typing =
        document.getElementById("typing");

    const hearts =
        document.getElementById("hearts");



    /* =====================
       OPENING
    ===================== */

    openBtn.addEventListener("click", () => {

        opening.classList.add("hide");

        setTimeout(() => {

            opening.style.display = "none";

            main.classList.add("show");

            startTyping();

        }, 1100);

    });



    /* =====================
       TYPING
    ===================== */

    function startTyping() {

        const text =
            "Dari sekian banyak cerita yang bisa terjadi, aku bersyukur salah satunya mempertemukan aku dengan kamu.";

        let index = 0;

        typing.textContent = "";

        const timer =
            setInterval(() => {

                typing.textContent +=
                    text[index];

                index++;

                if (index >= text.length) {

                    clearInterval(timer);

                }

            }, 38);

    }



    /* =====================
       SCROLL REVEAL
    ===================== */

    const reveal =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: .12
            }
        );


    reveal.forEach(element => {

        observer.observe(element);

    });



    /* =====================
       FLOATING HEARTS
    ===================== */

    function createHeart() {

        const heart =
            document.createElement("div");

        heart.className =
            "heart";

        heart.innerHTML =
            Math.random() > .25
                ? "♡"
                : "✦";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (9 + Math.random() * 14) + "px";

        heart.style.animationDuration =
            (7 + Math.random() * 6) + "s";

        hearts.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 14000);

    }


    setInterval(createHeart, 1900);



    /* =====================
       RANDOM FIRST PARTICLES
    ===================== */

    setTimeout(() => {

        createHeart();
        createHeart();

    }, 800);

});
