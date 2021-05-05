const popupWrapper = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const sidebar = document.querySelector('.sidebar');

const moreButton = document.querySelector('.more-button');
const closeButton = document.querySelector('.navigation-buttons__close');

moreButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function openPopup() {
	popupWrapper.classList.add('active');
	document.body.classList.add('notScrollable');
	popupContent.classList.remove('donation-hidden');
	sidebar.classList.add('sidebar-hidden');
}

popupWrapper.addEventListener('click', function(e){
	if(e.target !== this) return;
	closePopup();
});


function closePopup() {
	popupWrapper.classList.remove('active');
	document.body.classList.remove('notScrollable');
	popupContent.classList.remove('donation-hidden');
	sidebar.classList.remove('sidebar-hidden');
}


//SLIDER  FOR POPUP ANIMALS
const slidesContainer = document.querySelector('.popup-slider__slides');
const buttonLeft = document.querySelector('.popup-slider__button_left');
const buttonRight = document.querySelector('.popup-slider__button_right');

let slideOne = document.querySelector('.popup-slider__item_1');
let slideTwo = document.querySelector('.popup-slider__item_2');


let slides = [slideOne, slideTwo];
let currentPosition = 0;
const sizeImagePx = 110;
const sliderPosition = -(slides.length - 1) *  sizeImagePx;


function setPosition (position) {
	if (position > 0) {
		return false;
	}
	if (position < sliderPosition) {
		return false;
	}
	currentPosition = position;
	slides.forEach(slide => slide.style.transform = `translateX( ${position}%)`);
	return currentPosition;
}

buttonRight.onclick = () => {
	setPosition(currentPosition + sizeImagePx);
};

buttonLeft.onclick = () => {
	setPosition(currentPosition - sizeImagePx);
};



//VIDEO CHANGE
const testVideo = document.querySelector('.video-test');

const stopVideo1 = document.querySelector('.stop-video-1');
const stopVideo2 = document.querySelector('.stop-video-2');
const stopVideo3 = document.querySelector('.stop-video-3');

const touchVideo1 = document.querySelector('.video-1');
const touchVideo2 = document.querySelector('.video-2');
const touchVideo3 = document.querySelector('.video-3');

function baseFirst() {
	touchVideo1.src = 'https://www.youtube.com/embed/D7xWXk5T3-g';
}

function baseSecond() {
	touchVideo2.src = 'https://www.youtube.com/embed/65JHo3Cy2tY';
}

function baseThird() {
	touchVideo3.src = 'https://www.youtube.com/embed/D0eqnda8dOk';
}

stopVideo1.addEventListener('click', () => {
	testVideo.src = touchVideo1.src;
	touchVideo1.src = 'https://www.youtube.com/embed/OObOQ2GElhA';
	baseSecond();
	baseThird();
});

stopVideo2.addEventListener('click', () => {
	testVideo.src = touchVideo2.src;
	touchVideo2.src = 'https://www.youtube.com/embed/OObOQ2GElhA';
	baseFirst();
	baseThird();
});

stopVideo3.addEventListener('click', () => {
	testVideo.src = touchVideo3.src;
	touchVideo3.src = 'https://www.youtube.com/embed/OObOQ2GElhA';
	baseFirst();
	baseSecond();
});








