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

buttonDonate.addEventListener('click', openPopup);
buttonDonateVolunteers.addEventListener('click', openPopup);

buttonClose.addEventListener('click', closePopup);


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

