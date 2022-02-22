window.onload = () => {
    let content = document.getElementById('content');
    let nav = document.getElementById('nav');

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
        <p>Proyecto</p>
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
        <p class="m-0 text-muted">Descripción</p>
        <p class="m-0 text-muted">Consorcio</p>
    </div>
</div>

<div class="row w-100 align-middle mt-4">
    <div class="col-2">
        <img src="../assets/img/nav/image.png">
    </div>
    <div class="col-10">
        <p>Galería</p>
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
        <p>Difusión</p>
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
        <p>Sobre Nosotros</p>
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
        <p>Contacto</p>
    </div>
</div>

<div class="row w-100">
    <div class="col-12" style="margin-top: -20px !important;">
        <hr>
    </div>
</div>`

    nav.innerHTML = navContent;
    nav.classList.add("d-none");

    let openNav = document.getElementById("openNav");

    openNav.addEventListener("click", () => {
        nav.removeAttribute("class");
        nav.classList.add("customNav", "fs-5", "d-block");
        content.classList.add("blur");
    });

    let closeNav = document.getElementById("closeNav");
    closeNav.addEventListener("click", () => {
        nav.removeAttribute("class");
        nav.classList.add("d-none");
        content.classList.remove("blur");
    });
}