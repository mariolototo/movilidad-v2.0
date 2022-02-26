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
    nav.classList.add("d-none");

    let openNav = document.getElementById("openNav");

    openNav.addEventListener("click", () => {
        nav.removeAttribute("class");
        nav.classList.add("customNav", "fs-5", "d-block");
        content.classList.add("blur");
    });

    openNav.addEventListener("click", () => {
        this.toggleClass("open");
    });

    let closeNav = document.getElementById("closeNav");
    closeNav.addEventListener("click", () => {
        nav.removeAttribute("class");
        nav.classList.add("d-none");
        content.classList.remove("blur");
    });

}