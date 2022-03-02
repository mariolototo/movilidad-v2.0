disableScroll();

let index = $("#index")[0];
let enlaces = document.getElementsByTagName("a");

let upArrowContainer = document.getElementById("upArrowContainer");
let downArrowContainer = document.getElementById("downArrowContainer");

let nextItem = $("#nextItem")[0];

let cont = 0;

nextItem.onclick = () => {
    cont++;

    if (cont > 0) {
        if (upArrowContainer.innerHTML == "" || upArrowContainer.innerHTML == null) {
            upArrowContainer.innerHTML = `<button id="previousItem"><img src="../assets/img/index/arrow-down.png" width="125px"></button>`;

            let previousItem = $("#previousItem")[0];

            previousItem.onclick = () => {
                //CORREGIR BUGS
                cont--;

                if (cont < 0) {
                    cont = 0;
                }

                if (cont <= 0) {
                    upArrowContainer.innerHTML = "";
                }

                if (cont < enlaces.length && cont >= 0) {

                    window.scroll({
                        top: enlaces[cont].getBoundingClientRect().top - 200,
                        left: enlaces[cont].getBoundingClientRect().left,
                        behavior: "smooth"
                    });
                    console.log(cont);
                }
            }
        }

    }

    if (cont > enlaces.length - 1) {
        cont = enlaces.length - 1;
    }

    if (cont < enlaces.length && cont >= 0) {

        let offset = 200;

        if (enlaces[cont].hash == "#como") {
            offset = -600;
        }

        if (enlaces[cont].getBoundingClientRect().top > 0) {
            window.scroll({
                top: enlaces[cont].getBoundingClientRect().top - offset,
                left: enlaces[cont].getBoundingClientRect().left,
                behavior: "smooth"
            });
        }
    }
}

function disableScroll() {
    document.body.classList.add("stopScroll");
}