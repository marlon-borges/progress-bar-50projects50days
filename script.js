let buttonNext = document.querySelector('.next');
let buttonPrev = document.querySelector('.previous');
let progressBalls = document.querySelectorAll('.first_ball, .second_ball, .third_ball, .fourth_ball');
let i = 3;
let index = 0;
let progressBar = document.querySelector('.progress_bar');
let progressTintBar = document.querySelector('.progress_tinted_bar');
let progressMath = 0;

function nextProgress() {
    if (buttonPrev.classList.contains('disabled')) {
        buttonPrev.classList.remove('disabled');
    }
    if (index < i) {
        index++;
        progressBalls[index].classList.add('active');
        progressTintBar.style.width = `${progressMath += 32.6}%`;
    }
}

function previousProgress() {
    if (index === 0) {
        
    } else {
        if (index > i || index === i || index < 3) {
            progressBalls[index].classList.remove('active');
            index--;
            progressTintBar.style.width = `${progressMath -= 32.6}%`;
        }
    }
}

buttonNext.addEventListener('click', nextProgress);
buttonPrev.addEventListener('click', previousProgress);
