//disableScroll();

let index = $("#indexContent")[0];
let enlaces = document.getElementsByTagName("a");

let upArrowContainer = document.getElementById("upArrowContainer");
let downArrowContainer = document.getElementById("downArrowContainer");

let nextItem = $("#nextItem")[0];

let cont = 0;

nextItem.onclick = scrollDown;

function disableScroll() {
    document.body.classList.add("stopScroll");
}

function scrollDown() {
    cont++;

    let bgClass = "bgIndex-" + cont;

    index.removeAttribute("class");
    index.classList.add("indexContent", bgClass);

    if (cont > enlaces.length - 1) {
        cont = enlaces.length - 1;
    } else if (cont == enlaces.length - 1) {
        let offset = 200;

        if (enlaces[cont].hash == "#como") {
            offset = -600;
        }

        window.scroll({
            top: enlaces[cont].getBoundingClientRect().top - offset,
            left: enlaces[cont].getBoundingClientRect().left,
            behavior: "smooth"
        });

        downArrowContainer.innerHTML = "";
    } else {
        downArrowContainer.innerHTML = `<button id="nextItem"><img src="../assets/img/index/arrow-down.png" width="125px"></button>`;
        $("#nextItem")[0].onclick = scrollDown;

        let offset = 200;

        if (enlaces[cont].hash == "#como") {
            offset = -600;
        }

        window.scroll({
            top: enlaces[cont].getBoundingClientRect().top - offset,
            left: enlaces[cont].getBoundingClientRect().left,
            behavior: "smooth"
        });
    }

    if (cont > 0) {
        if (upArrowContainer.innerHTML == "") {
            upArrowContainer.innerHTML = `<button id="previousItem"><img src="../assets/img/index/arrow-down.png" width="125px"></button>`;

            let previousItem = $("#previousItem")[0];

            previousItem.onclick = scrollUp;
        }
    }
}

function scrollUp() {
    cont--;

    let bgClass = "bgIndex-" + cont;

    index.removeAttribute("class");
    index.classList.add("indexContent", bgClass);

    if (cont < 0) {
        cont = 0;
    } else if (cont == 0) {
        let offset = 200;

        upArrowContainer.innerHTML = "";

        window.scroll({
            top: enlaces[cont].getBoundingClientRect().top,
            left: enlaces[cont].getBoundingClientRect().left,
            behavior: "smooth"
        });
    } else {
        console.log("coño de su puta madre")
        let offset = 200;
        console.log("Item target: " + cont);
        console.log("Target: " + enlaces[cont].getBoundingClientRect().top);

        downArrowContainer.innerHTML = `<button id="nextItem"><img src="../assets/img/index/arrow-down.png" width="125px"></button>`;

        let nextItem = $("#nextItem")[0];

        nextItem.onclick = scrollDown;

        window.scroll({
            top: enlaces[cont].getBoundingClientRect().top + 1350,
            left: enlaces[cont].getBoundingClientRect().left,
            behavior: "smooth"
        });
    }
}