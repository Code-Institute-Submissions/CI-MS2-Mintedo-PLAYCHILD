//-------------------------------------------------Console animations
//Checks which key is being pressed
function checkDownKey(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        animateDPad(e.key);
    } else if (e.key === 'a' || e.key === 'b') {
        animateABButton(e.key);
    } else if (e.keyCode === 32 || e.keyCode === 13) {
        animateStartSelectButton(e.keyCode)
    }
}

//Checks qhich key is being released
function checkUpKey(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        resetDPad(e.key);
    } else if (e.key === 'a' || e.key === 'b') {
        resetABButton(e.key);
    } else if (e.keyCode === 32 || e.keyCode === 13) {
        resetStartSelectButton(e.keyCode);
    }
}

//D-Pad Animation
const innerDPad = $("#inner-d-pad")

function animateDPad(key) {
    if (key === 'ArrowLeft') {
        $(innerDPad).removeClass().addClass('d-pad-left-animation');
    } else if (key === 'ArrowRight') {
        $(innerDPad).removeClass().addClass('d-pad-right-animation');
    } else if (key === 'ArrowUp') {
        $(innerDPad).removeClass().addClass('d-pad-up-animation');
    } else if (key === 'ArrowDown') {
        $(innerDPad).removeClass().addClass('d-pad-down-animation');
    }
}

function resetDPad(key) {
    if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'ArrowLeft' || key === 'ArrowRight') {
        $(innerDPad).removeClass();
    }
}


// A & B Button Animation
const aButtonTop = $("#A-button-top");
const aButtonSide = $("#A-button-side");
const bButtonTop = $("#B-button-top");
const bButtonSide = $("#B-button-top");

function animateABButton(key) {
    if (key === 'a') {
        $(aButtonTop).addClass("a-b-button-animation");
    } else if (key === 'b') {
        $(bButtonTop).addClass("a-b-button-animation");
    }
}

function resetABButton(key) {
    if (key === 'a') {
        $(aButtonTop).removeClass();
        $(aButtonSide).removeClass();
    } else if (key === 'b') {
        $(bButtonTop).removeClass()
        $(bButtonSide).removeClass();
    }
}

//Select & Start Button Animation
const startButton = $("#start-button");
const selectButton = $("#select-button");

function animateStartSelectButton(key) {
    if (key === 13) {
        $(startButton).addClass("start-select-button-animation");
    } else if (key === 32) {
        $(selectButton).addClass("start-select-button-animation");
    }
}

function resetStartSelectButton(key) {
    if (key === 13) {
        $(startButton).removeClass();
    } else if (key === 32) {
        $(selectButton).removeClass();
    }
}

//Power LED On
const powerLEDImgOff = $('#power-led-off');
function turnPowerLEDOn() {
    powerLEDImgOff.addClass("hidden");
}

setTimeout(turnPowerLEDOn, 1300);

//Calling Listeners
$(document).keydown(checkDownKey);
$(document).keyup(checkUpKey);

//-------------------------------------------------Modal
const modal = $(".modal");
const button = $(".btn");
const span = $(".close");

button.on("click", function () {
    modal.css("display", "block");
})

span.on("click", function () {
    modal.css("display", "none");
})