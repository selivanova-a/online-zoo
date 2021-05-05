const popupWrapper = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');

const buttonDonate = document.querySelector('.donation-info__button');
const buttonDonateVolunteers = document.querySelector('.footer-button');
const buttonClose = document.querySelector('.close-button');
const buttonMoney = document.querySelectorAll('.donation-buttons__item');

const buttonNextPopup = document.querySelector('.next-button');
const buttonNextPopup2 = document.querySelector('.second-two-button');

const buttonBack = document.querySelector('.back-button');
const buttonBack2 = document.querySelector('.second-back-button');

const donationPopupStep1 = document.querySelector('.donation-step-1');
const donationPopupStep2 = document.querySelector('.donation-step-2');
const donationPopupStep3 = document.querySelector('.donation-step-3');

const buttonDonationAmount = document.querySelector('.donation-amount__button');

const validAmount = document.querySelector('.amount-input');
const validSpecialPet = document.querySelector('#animals');
const validName = document.querySelector('.name');
const validEmail = document.querySelector('.email');
const validCardNumber = document.querySelector('.card-number');
const validCardCVV = document.querySelector('.card-cvv');
const validMonth = document.querySelector('#month');
const validYear = document.querySelector('#year');
const buttonSubmit = document.querySelector('.submit-button');

const allDollarsButton = document.querySelectorAll('.step-1-buttons__item');

buttonDonate.addEventListener('click', openPopup);
buttonDonateVolunteers.addEventListener('click', openPopup);

buttonClose.addEventListener('click', closePopup);


//VALIDATION ALL INPUTS FOR SUBMIT BUTTON

function validationSubmit() {
	alert('Thank you for your donation!!!');
}

validAmount.addEventListener('input', validate);
validSpecialPet.addEventListener('input', validate);
validName.addEventListener('input', validate);
validEmail.addEventListener('input', validate);
validCardNumber.addEventListener('input', validate);
validCardCVV.addEventListener('input', validate);
validMonth.addEventListener('input', validate);
validYear.addEventListener('input', validate);

function validate() {
	if (
		validAmount.validity.valid &&
		validSpecialPet.validity.valid &&
		validName.validity.valid &&
		validEmail.validity.valid &&
		validCardNumber.validity.valid &&
		validCardCVV.validity.valid &&
		validMonth.validity.valid &&
		validYear.validity.valid
	) {
		buttonSubmit.classList.remove('invalid');
		buttonSubmit.addEventListener('click', validationSubmit);
	} else {
		buttonSubmit.classList.add('invalid');
	}
}



//OPEN POPUP FOR DONATE AMOUNT
buttonDonationAmount.addEventListener('click', donationAmount);

function donationAmount() {
	popupWrapper.classList.add('active');
	popupContent.classList.add('donation-hidden');
	donationPopupStep1.classList.remove('donation-hidden');
}



//MAX 4 SIMBOLS FOR DONATE AMOUNT
const donationInput = document.querySelector('#num_count');
donationInput.addEventListener('input', maxValueOfDonate);

function maxValueOfDonate () {
	if (this.value > 4 || typeof this.value != "number") {
		this.value = this.value.slice(0, 4);
	}
};

//MAX SIMBOLS FOR CREDIT CARD
const cardNumberInput = document.querySelector('#card-number');
cardNumberInput.addEventListener('input', maxValueOfCardNumber);

function maxValueOfCardNumber () {
	if (this.value > 16 || typeof this.value != "number") {
		this.value = this.value.slice(0, 16);
	}
};


const cardCvvInput = document.querySelector('#card-cvv');
cardCvvInput.addEventListener('input', maxValueOfCardCVV);

function maxValueOfCardCVV () {
	if (this.value > 3 || typeof this.value != "number") {
		this.value = this.value.slice(0, 3);
	}
};


validAmount.addEventListener('input', maxValueAmount);

function maxValueAmount () {
	if (this.value > 4 || typeof this.value != "number") {
		this.value = this.value.slice(0, 4);
	}
};


//SEND INPUT VALUE TO OUTPUT
let donationAmountInput = document.querySelector('#num_count');
let donationAmountOutput = document.querySelector('#amount-input');
const startDonationItem = document.querySelector('#start-donate-item');


buttonDonationAmount.addEventListener('click', () => {
	let inputNum = donationAmountInput.value;
	donationAmountOutput.value = inputNum;

	if (inputNum === '') {
		startDonationItem.classList.add('active-donation-item');
		outputOtherAmount.value = '.';
	}
});



function openPopup() {
	popupWrapper.classList.add('active');
	document.body.classList.add('notScrollable');
	popupContent.classList.remove('donation-hidden');
	donationPopupStep1.classList.add('donation-hidden');
	donationPopupStep2.classList.add('donation-hidden');
}

popupWrapper.addEventListener('click', function(e){
	if(e.target !== this) return;
	closePopup();
});


function closePopup() {
	popupWrapper.classList.remove('active');
	document.body.classList.remove('notScrollable');
	popupContent.classList.remove('donation-hidden');
	donationPopupStep1.classList.add('donation-hidden');
	donationPopupStep2.classList.add('donation-hidden');
	donationPopupStep3.classList.add('donation-hidden');
	allDollarsButton.forEach((button) => {
		button.classList.remove('active-donation-item');
	})
}


buttonMoney.forEach(button => button.addEventListener('click', toDonationPopup));

function toDonationPopup() {
	popupContent.classList.add('donation-hidden');
	donationPopupStep1.classList.remove('donation-hidden');
}

buttonNextPopup.addEventListener('click', openNextPopup);


function openNextPopup() {
	donationPopupStep1.classList.add('donation-hidden');
	donationPopupStep2.classList.add('active');
	donationPopupStep2.classList.remove('donation-hidden');
}

buttonNextPopup2.addEventListener('click', openNextPopupTwo);

function openNextPopupTwo() {
	console.log('work');
	donationPopupStep2.classList.add('donation-hidden');
	donationPopupStep3.classList.add('active');
	donationPopupStep3.classList.remove('donation-hidden');
}

function closeNextPopup() {
	donationPopupStep1.classList.add('donation-hidden');
	donationPopupStep2.classList.add('donation-hidden');
	donationPopupStep2.classList.remove('active');
}

buttonBack.addEventListener('click', backPopup);

function backPopup() {
	donationPopupStep2.classList.add('donation-hidden');
	donationPopupStep1.classList.remove('donation-hidden');
}

buttonBack2.addEventListener('click', backPopupTwo);

function backPopupTwo() {
	donationPopupStep3.classList.add('donation-hidden');
	donationPopupStep2.classList.remove('donation-hidden');
}


//SLIDER FOR 'MEET SOME OUR PETS'
const buttonLeft = document.querySelector('.slider__button_left');
const buttonRight = document.querySelector('.slider__button_right');

let sliderItems = document.querySelectorAll('.slider-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + sliderItems.length) % sliderItems.length;
}

function hideItem(direction) {
	isEnabled = false;
	sliderItems[currentItem].classList.add(direction);
	sliderItems[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	})
}

function showItem(direction) {
	sliderItems[currentItem].classList.add('next', direction);
	sliderItems[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	})
}

buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);

function moveLeft() {
	if (isEnabled) {
		previousItem(currentItem);
	}
}

function moveRight() {
	if (isEnabled) {
		nextItem(currentItem);
	}
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}



//AUTO-SLIDER FOR FEEDBACKS
const feedbackSlider = document.querySelector('.feedback-slider__slides');
const feedbackButtonLeft = document.querySelector('.feedback-slider__button_left');
const feedbackButtonRight = document.querySelector('.feedback-slider__button_right');

let feedbackSlideOne = document.querySelector('.feedback_slider_item_1');
let feedbackSlideTwo = document.querySelector('.feedback_slider_item_2');


let feedbackslides = [feedbackSlideOne, feedbackSlideTwo];
let feedbackcurrentPosition = 0;
const feedbacksizeImagePx = 100;
const feedbacksliderPosition = -(2 - 1) *  100;


function feedbackSetPosition (position) {
	if (position > 0) {
		return false;
	}
	if (position < feedbacksliderPosition) {
		return false;
	}
	feedbackcurrentPosition = position;
	feedbackslides.forEach(slide => slide.style.transform = `translateX( ${position}%)`);
	return feedbackcurrentPosition;
}

function plusSlide() {
	feedbackSetPosition(feedbackcurrentPosition - feedbacksizeImagePx);
}

function minusSlide() {
	feedbackSetPosition(feedbackcurrentPosition + feedbacksizeImagePx);
}

feedbackButtonRight.addEventListener('click', () => {
	plusSlide();
	delayAutoSlide();
});
feedbackButtonLeft.addEventListener('click', () => {
	minusSlide();
	delayAutoSlide();
});

let autoSlideInterval15 = setInterval(plusSlide, 15000);
let autoSlideInterval30 = setInterval(minusSlide, 30000);
let autoSlideTimeOut = null;

function delayAutoSlide() {
	clearTimeout(autoSlideTimeOut);
	clearInterval(autoSlideInterval15);
	clearInterval(autoSlideInterval30);
	autoSlideInterval15 = null;
	autoSlideInterval30 = null;//
	autoSlideTimeOut = setTimeout(() => {
		clearInterval(autoSlideInterval15);
		clearInterval(autoSlideInterval30);
		autoSlideInterval15 = setInterval(plusSlide, 15000);
		autoSlideInterval30 = setInterval(minusSlide, 30000);
	}, 45000);

}


feedbackSlider.addEventListener('click', delayAutoSlide);

//DONATE TO POPUP
const inputDollars10 = document.querySelector('.input-dollars-10');
const inputDollars30 = document.querySelector('.input-dollars-30');
const inputDollars50 = document.querySelector('.input-dollars-50');
const inputDollars80 = document.querySelector('.input-dollars-80');
const inputDollars100 = document.querySelector('.input-dollars-100');
const inputOtherAmount = document.querySelector('.input-other-amount');

const outputDollars10 = document.querySelector('.output-dollars-10');
const outputDollars30 = document.querySelector('.output-dollars-30');
const outputDollars50 = document.querySelector('.output-dollars-50');
const outputDollars80 = document.querySelector('.output-dollars-80');
const outputDollars100 = document.querySelector('.output-dollars-100');
const outputOtherAmount = document.querySelector('.amount-input');

inputDollars10.addEventListener('click', () => {
	outputDollars10.classList.add('active-donation-item');
	outputOtherAmount.value = '.';
});

inputDollars30.addEventListener('click', () => {
	outputDollars30.classList.add('active-donation-item');
	outputOtherAmount.value = '.';
});

inputDollars50.addEventListener('click', () => {
	outputDollars50.classList.add('active-donation-item');
	outputOtherAmount.value = '.';
});

inputDollars80.addEventListener('click', () => {
	outputDollars80.classList.add('active-donation-item');
	outputOtherAmount.value = '.';
});

inputDollars100.addEventListener('click', () => {
	outputDollars100.classList.add('active-donation-item');
	outputOtherAmount.value = '.';
});

inputOtherAmount.addEventListener('click', () => {
	outputOtherAmount.focus();
	outputOtherAmount.value = '';
});



