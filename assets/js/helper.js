$(document).ready(function () {
    //Checks which keys are being pressed
    function checkDownKey(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            animateDPad(e.key);
        } else if (e.key === 'a' || e.key === 'b') {
            animateABButton(e.key);
        }
    }

    function checkUpKey(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            resetDPad(e.key);
        } else if (e.key === 'a' || e.key === 'b') {
            resetABButton(e.key);
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


    //Power LED On
    const powerLEDImgOff = $('#power-led-off');
    function turnPowerLEDOn () {
        powerLEDImgOff.addClass("hidden");
    }

    setTimeout(turnPowerLEDOn, 1300);

    //Calling Listeners
    $(document).keydown(checkDownKey);
    $(document).keyup(checkUpKey);
})