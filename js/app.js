window.onload = () => {
    let content = $("#content")[0];
    let nav = $("#nav")[0];
    let navContent = `<div class="row w-100 align-middle">
    <div class="col-11"></div>
    <div class="col-1">
        <button id="closeNav" class="navButton"><img src="../assets/img/nav/close.png"
                alt="Close navigation bar" width="25px"></button>
    </div>
</div>

<div class="row w-100 align-middle">
    <div class="col-2">
        <img src="../assets/img/nav/product-description.png">
    </div>
    <div class="col-10">
        <a class="link" href="../index.html"><p>Proyecto</p></a>
    </div>
</div>

<div class="row w-100">
    <div class="col-12" style="margin-top: -20px !important;">
        <hr>
    </div>
</div>

<div class="row w-100">
    <div class="col-2"></div>
    <div class="col-10 fs-6" style="margin-top: -10px !important;">
        <a class="link" href="../templates/descripcion.html"><p class="m-0 text-muted">Descripción</p></a>
        <a class="link" href="../templates/consorcio.html"><p class="m-0 text-muted">Consorcio</p></a>
    </div>
</div>

<div class="row w-100 align-middle mt-4">
    <div class="col-2">
        <img src="../assets/img/nav/image.png">
    </div>
    <div class="col-10">
        <a class="link" href="../templates/galeria.html"><p>Galería</p></a>
    </div>
</div>

<div class="row w-100">
    <div class="col-12" style="margin-top: -20px !important;">
        <hr>
    </div>
</div>

<div class="row w-100 align-middle mt-4">
    <div class="col-2">
        <img src="../assets/img/nav/send.png">
    </div>
    <div class="col-10">
        <a class="link" href="../templates/difusion.html"><p>Difusión</p></a>
    </div>
</div>

<div class="row w-100">
    <div class="col-12" style="margin-top: -20px !important;">
        <hr>
    </div>
</div>

<div class="row w-100 align-middle mt-4">
    <div class="col-2">
        <img src="../assets/img/nav/grupo.png">
    </div>
    <div class="col-10">
        <a class="link" href="../templates/about-us.html"><p>Sobre Nosotros</p></a>
    </div>
</div>

<div class="row w-100">
    <div class="col-12" style="margin-top: -20px !important;">
        <hr>
    </div>
</div>

<div class="row w-100 align-middle mt-4">
    <div class="col-2">
        <img src="../assets/img/nav/envelope.png">
    </div>
    <div class="col-10">
        <a class="link" href="../templates/contacto.html"><p>Contacto</p></a>
    </div>
</div>

<div class="row w-100">
    <div class="col-12" style="margin-top: -20px !important;">
        <hr>
    </div>
</div>`

    nav.innerHTML = navContent;

    let openNav = $("#openNav")[0];

    openNav.addEventListener("click", () => {
        nav.style.animation = "navAppear .5s ease-in-out";
        setTimeout(() => {
            nav.classList.remove("fixNavOut");
            nav.classList.add("fixNavIn");
        }, 500);

        content.style.animation = "blur .5s linear";
        setTimeout(() => {
            content.classList.remove("unblur");
            content.classList.add("blur");
        }, 500);
    });

    let closeNav = $("#closeNav")[0];
    closeNav.addEventListener("click", () => {
        nav.style.animation = "navDesappear .5s ease-in-out";
        setTimeout(() => {
            nav.classList.remove("fixNavIn");
            nav.classList.add("fixNavOut");
        }, 500);

        content.style.animation = "unblur .5s linear";
        setTimeout(() => {
            content.classList.remove("blur");
            content.classList.add("unblur");
        }, 500);
    });

    /* GALERIA */
    let buttons = $(".btnYears");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", selectYear);
    }

    function selectYear() {

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("btnSelected");
        }
        this.classList.add("btnSelected");
    }

    $(".years").on("mouseover", animateYears);

    function animateYears() {
        let div = document.createElement("div");
        div.classList.add("btnSelected", "btnYears");
        let e = window.event;
        let posX = e.clientX;
        let posY = e.clientY;
    }

}