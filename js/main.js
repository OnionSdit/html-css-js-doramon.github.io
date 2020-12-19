function playSound() {
    const audio = new Audio('./media/doraemon.mp3')
    audio.play();
}

const container = document.querySelector('.container');
const status = document.querySelector('#status');
const headMon = document.querySelector('#head-mon');
const BodyMon = document.querySelector('#body-doraemon');
const LeftMon = document.querySelector('#left');
const RightMon = document.querySelector('#right');
const FootMon = document.querySelector('#foot-mon');

container.onclick = () => {
    playSound();
}

headMon.onmouseover = () => {
    status.innerText = "ĐÂY LÀ CÁI ĐẦU ! ";
}

headMon.onmouseleave = () => {
    status.innerText = 'DORAEMON';
}

LeftMon.onmouseover = () => {
    status.innerText = "ĐÂY LÀ TAY TRÁI ! ";
}

LeftMon.onmouseleave = () => {
    status.innerText = 'DORAEMON';
}

RightMon.onmouseover = () => {
    status.innerText = "ĐÂY LÀ TAY PHẢI ! ";
}

RightMon.onmouseleave = () => {
    status.innerText = 'DORAEMON';
}


FootMon.onmouseover = () => {
    status.innerText = "ĐÂY LÀ CÁI CHÂN ! ";
}

FootMon.onmouseleave = () => {
    status.innerText = 'DORAEMON';
}
