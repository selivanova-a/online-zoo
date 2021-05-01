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



//OPEN POPUP FOR DONATE AMOUNT///////////////////////////////////////////////////////////////////
buttonDonationAmount.addEventListener('click', donationAmount);

function donationAmount() {
	popupWrapper.classList.add('active');
	popupContent.classList.add('donation-hidden');
	donationPopupStep1.classList.remove('donation-hidden');
}



//MAX 4 SIMBOLS FOR DONATE AMOUNT//////////////////////////////////////////////////////////////////
const donationInput = document.querySelector('#num_count');
donationInput.addEventListener('input', maxValueOfDonate);

function maxValueOfDonate () {
	if (this.value > 4 || typeof this.value != "number") {
		this.value = this.value.slice(0, 4);
	}
};

//MAX 16 and 3 SIMBOLS FOR CREDIT CARD//////////////////////////////////////////////////////////////////
//for 16
const cardNumberInput = document.querySelector('#card-number');
cardNumberInput.addEventListener('input', maxValueOfCardNumber);

function maxValueOfCardNumber () {
	if (this.value > 16 || typeof this.value != "number") {
		this.value = this.value.slice(0, 16);
	}
};

//for 3
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


//SEND INPUT VALUE TO OUTPUT //////////////////////////////////////////////////////////////////
/*const donationOutput = document.querySelector('.amount-input');
/!*const donationOutputInner =  donationOutput.value;*!/
donationOutput.value = donationInputInner;*/



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


//SLIIIIIIIIIIIIIIIIIIIIIIIDEEEEEEEEEEEEEEEEEEEEEEEER
const buttonLeft = document.querySelector('.slider__button_left');
const buttonRight = document.querySelector('.slider__button_right');

let slideOne = document.querySelector('.slider__item_1');
let slideTwo = document.querySelector('.slider__item_2');


let slides = [slideOne, slideTwo];
let currentPosition = 0;
const sizeImagePx = 100;
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
	setPosition(currentPosition - sizeImagePx);
};

buttonLeft.onclick = () => {
	setPosition(currentPosition + sizeImagePx);
};

