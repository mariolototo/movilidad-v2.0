window.onload = () => {
    let content = $("#content")[0];
    let nav = $("#nav")[0];
    let navContent = `<div class="row w-100 align-middle justify-content-end">
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
        <a class="link" href="#"><p>Proyecto</p></a>
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
        document.body.classList.add("stopScroll");

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
        document.body.classList.remove("stopScroll");
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
    let years = $(".yearsA");
    for (let i = 0; i < years.length; i++) {
        years[i].addEventListener("click", selectYear);
    }

    function selectYear() {

        for (let i = 0; i < years.length; i++) {
            console.log(years[i]);
            years[i].classList.remove("selected");
        }
        this.classList.add("selected");
    }

    let sliderContent = document.getElementById("sliderContent");
    let arrayImgs = [];

    for (let i = 0; i < sliderContent.children.length; i++) {
        arrayImgs.push(sliderContent.children[i]);

        if (i != 0) {
            arrayImgs[i].style.width = "250px";
            arrayImgs[i].style.height = "200px";
            arrayImgs[i].style.marginTop = "100px";
        }
    }

    let contador = 0;
    let offset = 1.105;

    arrayImgs[contador].style.width = "500px";

    let btnNext = $("#btnNext");
    let btnPrev = $("#btnPrev");

    console.log("Slider: " + sliderContent.getBoundingClientRect().x);
    console.log("Primera Imagen: " + arrayImgs[0].getBoundingClientRect().x);

    calculateFirstDisplacement();

    btnNext.on("click", () => {
        contador++;

        if (contador == 1) {
            btnPrev.html("<button><img src='../assets/img/index/arrow-down.png' width='150px'></button>");
        }else if(contador == arrayImgs.length - 1){
            btnNext.html("");
        }

        let currentLeft = parseInt(sliderContent.style.left);

        sliderContent.style.left = (currentLeft - (308.109 - offset)) + "px";

        changeImgsNext();
    });

    btnPrev.on("click", () => {
        contador--;

        if(contador < arrayImgs.length - 1){
            btnNext.html("<button><img src='../assets/img/index/arrow-down.png 'width='150px'></button>");
        }

        if(contador == 0){
            btnPrev.html("");
        }

        let currentLeft = parseInt(sliderContent.style.left);

        sliderContent.style.left = (currentLeft + (308.109 - offset)) + "px";
        
        changeImgsPrev();
    });

    function calculateFirstDisplacement(){
        let firstImagePositionX = Math.abs(arrayImgs[0].getBoundingClientRect().x);
        let firstImageHalfWidth = arrayImgs[0].width/2;
        let currentSliderPosition = Math.abs(sliderContent.getBoundingClientRect().x);
        let firstImageMargin = 57.109;

        let moveAmount = currentSliderPosition + firstImagePositionX + firstImageMargin + firstImageHalfWidth + (offset * (arrayImgs.length/2 - 1))

        sliderContent.style.left = moveAmount + "px";
    }

    function changeImgsNext() {

        if (contador > arrayImgs.length - 1) {
            contador = arrayImgs.length - 1;
        }

        arrayImgs[contador - 1].style.width = "250px";
        arrayImgs[contador - 1].style.height = "200px";
        arrayImgs[contador - 1].style.marginTop = "100px";
        arrayImgs[contador - 1].style.transition = ".5s ease";
        arrayImgs[contador].style.width = "500px";
        arrayImgs[contador].style.height = "380px";
        arrayImgs[contador].style.marginTop = "0px";
        arrayImgs[contador].style.transition = ".5s ease";

    }

    function changeImgsPrev() {

        if (contador <= 0) {
            contador = 0;
        }

        arrayImgs[contador + 1].style.width = "250px";
        arrayImgs[contador + 1].style.height = "200px";
        arrayImgs[contador + 1].style.marginTop = "100px";
        arrayImgs[contador + 1].style.transition = ".5s ease";
        arrayImgs[contador].style.width = "500px";
        arrayImgs[contador].style.height = "380px";
        arrayImgs[contador].style.marginTop = "0px";
        arrayImgs[contador].style.transition = ".5s ease";

    }

    mediumZoom(".minigallerImg", {
        margin: 0,
    });

}