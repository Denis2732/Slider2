//Получаем элемент
var backBtn = document.querySelector('.back-slide');
var nextBtn = document.querySelector('.next-slide');
var imgSlide = document.querySelector('img');

//Добавляем слушателя
backBtn.addEventListener('click', onBackBtn);
nextBtn.addEventListener('click', onNextBtn);

//Создаем массив картинок
var imgUrls = [];
imgUrls.push('img/s1.png');
imgUrls.push('img/s2.png');
imgUrls.push('img/s3.png');
imgUrls.push('img/s4.png');
imgUrls.push('img/s5.png');


var currentImgIndex = 0;

imgSlide.src = imgUrls[currentImgIndex];
backBtn.disabled = true;

function onBackBtn() {
	currentImgIndex--;
	
	/*
	//Первый вариант остановки слайдера 
	if(currentImgIndex <= 0){
		currentImgIndex = 0;
	}*/
	
	nextBtn.disabled = false;
	if(currentImgIndex === 0){
		backBtn.disabled = true;
	}
	imgSlide.src = imgUrls[currentImgIndex];
}

function onNextBtn() {
	currentImgIndex++;

	/*
	//Первый вариант остановки слайдера 
	if(currentImgIndex >= 4){
		currentImgIndex = 4;
	}*/

	backBtn.disabled = false;
	if(currentImgIndex === (imgUrls.length - 1) ){
		nextBtn.disabled = true;
	}
	imgSlide.src = imgUrls[currentImgIndex];
}
