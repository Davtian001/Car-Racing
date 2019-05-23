
let docum = document
docum.addEventListener("DOMContentLoaded", () => {

    let main = docum.getElementById("main");
    let car = docum.getElementById("mycar");
    let othercar = docum.getElementById("othercar");
    let gameover = docum.getElementById("gameover")
    gameover.hidden = true;
    let right = car.getBoundingClientRect().right;
    let top = main.offsetHeight - car.offsetHeight;
    let points = docum.getElementById("points");
    let bgSize = 80;
    let img = 2;
    // -----buttons----------------------
    let btnTyp = document.getElementById("xmac");
    let btnNorm = document.getElementById("normal");
    let drawType = "normal" // default
    let interval = null;
    let rotate = 25;

    let count = 0;
    let pause = false;

    docum.addEventListener("click", (event) => {

        if (event.target.dataset.button === "normal") {
            if (drawType !== "normal"){ points.textContent = 0;}
            drawType = "normal";
            othercar.style.transition = "0.02s"//0.1
            othercar.style.transform = "rotate(0deg)"
            main.style.backgroundColor = "#3bb9b1";
            clearInterval(interval);
            if (pause) pause = false
        } else if (event.target.dataset.button === "xmac") {
            if (drawType !== "xmac"){ points.textContent = 0;}
            drawType = "xmac";
            othercar.style.transition = "0.43s"//
            main.style.backgroundColor = "red";
            clearInterval(interval);
            if (pause) pause = false
        } else if (event.target.dataset.button === "stop") {
            pause = !pause
            if (pause) {
                drawType !== "xmac" ? interval = setInterval(normal, 23) : interval = setInterval(drunken, 50)
            } else if (pause == false) {
                clearInterval(interval)
            }
        }

    })

    //--------Interval-------------------

    function gameOver(centerX, centerX) {
        othercar.hidden = true
        let elem = document.elementFromPoint(centerX, centerX);
        othercar = hidden = false;
        if (elem.tagName === "DIV") {
        }

    }

    //----Start positions--------------------
    car.style.right = (right) + "px";
    car.style.top = (top) + "px";

    (btnTyp !== "xmac") ? normal() : drunken(); // function call

    othercar.style.top = (car.offsetHeight / 3) + "px";
    othercar.style.right = (main.offsetWidth / 2.4) + "px";
    //---------------------------

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    }

    function normal() {
        if (count < main.offsetHeight) {
            othercar.style.backgroundImage = `url('demo/img/car${img}.png')`;
            othercar.hidden = false;
           // gameOver(othercar.getBoundingClientRect().left, othercar.getBoundingClientRect().top)
            bgSize += 0.5
            count += 10;
            othercar.style.top = count + "px";
            othercar.style.backgroundSize = bgSize + "px"
        } else {
            othercar.style.right = `${randomInteger(0, 450)}px`;
            othercar.style.backgroundImage = `url('img/car${img}.png')`;
            othercar.hidden = true;
            count = -100;
            othercar.style.backgroundSize = (bgSize = 90) + "px"
                + points.textContent++
        }
    }

    function drunken() {

        if (count < main.offsetHeight) {
            setInterval(() => {
                if (rotate === - rotate) { rotate = +rotate; }
                else { rotate = -rotate; }
            }, 70);

            // gameOver(car.style.width,car.style.height)
            othercar.hidden = false;
            bgSize += 0.5
            othercar.style.top = (count += 10) + "px";
            othercar.style.transform = `rotate(${rotate = -rotate}deg)`
            othercar.style.right = `${randomInteger(0, 500)}px`;
            othercar.style.backgroundSize = bgSize + "px"
        } else {
            othercar.hidden = true;
            othercar.style.top = 0 + "px"
            othercar.style.backgroundSize = (bgSize = 90) + "px"
            count = -100;
            points.textContent = +points.textContent + 3
        }
    }





    //---------- Control-------------
    let endLR = main.offsetWidth - main.offsetLeft;
    let endTB = main.offsetHeight - main.offsetTop;

    document.addEventListener("keydown", (event) => {
        //   console.log(car.getBoundingClientRect())

        let key = event.code;
        if (key === "ArrowLeft" && right < endLR) {
            car.style.right = `${right += 35}px`;
        } else if (key === "ArrowRight" && right > 0) {
            car.style.right = `${right -= 35}px`;
        }
        else if (key === "ArrowDown" && top < 500) {
            car.style.top = `${top += 25}px`;
        }
        else if (key === "ArrowUp" && top > 0) {
            car.style.top = `${top -= 25}px`;
        }
    })



})


