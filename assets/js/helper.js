$(document).ready(function() {
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
    
    function removeAnimation(key) {
        $(innerDPad).removeClass('d-pad-left-animation d-pad-right-animation');
    }
    
    function callAnimateOnKeyPress(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
             animateDPad(e.key);
        } else {
            removeAnimation();
        }
    }
    
    function resetDPadOnKeyUp(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            $(innerDPad).removeClass();
        }
    }
    
    $(document).keydown(callAnimateOnKeyPress);
    $(document).keyup(resetDPadOnKeyUp);
})