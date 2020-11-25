function animate() {
    $("#d-pad").addClass('d-pad-animation');
}

function removeAnimation() {
    $("#d-pad").removeClass('d-pad-animation');
}

function animateOnKeyPress(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
         animate(e.key);
    } else {
        removeAnimation();
    }
}



$(document).keydown(animateOnKeyPress);
$(document).keyup(animateOnKeyUp);