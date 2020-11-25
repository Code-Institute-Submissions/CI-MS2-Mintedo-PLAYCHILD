$(document).ready(function() {
    function animate(key) {
        if (key === 'ArrowLeft') {
            $("#inner-d-pad").removeClass().addClass('d-pad-left-animation'); 
        } else if (key === 'ArrowRight') {
            $("#inner-d-pad").removeClass().addClass('d-pad-right-animation');
        } else if (key === 'ArrowUp') {
            $("#inner-d-pad").removeClass().addClass('d-pad-up-animation');
        } else if (key === 'ArrowDown') {
            $("#inner-d-pad").removeClass().addClass('d-pad-down-animation');
        }
    }
    
    function removeAnimation(key) {
        $("#inner-d-pad").removeClass('d-pad-left-animation d-pad-right-animation');
    }
    
    function animateOnKeyPress(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
             animate(e.key);
        } else {
            removeAnimation();
        }
    }
    
    function resetOnKeyUp() {
        $("#inner-d-pad").removeClass()
    }
    
    
    
    $(document).keydown(animateOnKeyPress);
    $(document).keyup(resetOnKeyUp);
})