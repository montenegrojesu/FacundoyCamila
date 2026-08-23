/* =========================================
   CUENTA REGRESIVA
========================================= */

const weddingDate = new Date(
    "November 15, 2026 12:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference %
            (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference %
            (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (difference %
            (1000 * 60))
        /
        1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();



/* =========================================
   COPIAR ALIAS
========================================= */

const copyButton =
    document.getElementById("copyAlias");

const copyMessage =
    document.getElementById("copyMessage");


copyButton.addEventListener("click", async () => {

    const alias =
        "CAMILAYFACUNDO2026";


    try {

        await navigator.clipboard.writeText(alias);

        copyMessage.textContent =
            "✓ Alias copiado correctamente";


        copyButton.textContent =
            "¡Copiado!";


        setTimeout(() => {

            copyMessage.textContent = "";

            copyButton.textContent =
                "Copiar alias";

        }, 2500);


    } catch (error) {

        copyMessage.textContent =
            "No se pudo copiar automáticamente. " +
            "Copialo manualmente.";

    }

});



/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});

/* =========================================
   CARRUSEL DE FOTOS
========================================= */

const carouselImages =
    document.querySelectorAll(".carousel-image");

const dots =
    document.querySelectorAll(".dot");

const prevButton =
    document.querySelector(".carousel-btn.prev");

const nextButton =
    document.querySelector(".carousel-btn.next");

let currentSlide = 0;


function showSlide(index) {

    carouselImages.forEach(image => {
        image.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });


    carouselImages[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;
}


/* SIGUIENTE */

nextButton.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= carouselImages.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});


/* ANTERIOR */

prevButton.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = carouselImages.length - 1;
    }

    showSlide(currentSlide);

});


/* CLIC EN LOS PUNTOS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});


/* CAMBIO AUTOMÁTICO */

setInterval(() => {

    currentSlide++;

    if (currentSlide >= carouselImages.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);