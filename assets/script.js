const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slideshow = document.querySelectorAll(".slideshow");
const numberSlides = slideshow.length;
const next = document.querySelector(".arrow_right");
const previous = document.querySelector(".arrow_left");
let count = 0;

const dots = document.querySelectorAll(".dot");
const numberDots = dots.length;
let countDots= 0;

const paragraphes = document.querySelectorAll("#banner p");
const numberP = paragraphes.length;
let countP = 0;

function nextSlide() {
	slideshow[count].classList.remove("active");

	if(count < numberSlides - 1){
		count++;
	}
	else {
		count = 0;
	}
	slideshow[count].classList.add("active");
	console.log(count);
}
function nextDot() {
	dots[countDots].classList.remove("dot_selected");

	if(countDots < numberDots - 1){
		countDots++;
	}
	else {
		countDots = 0;
	}
	dots[countDots].classList.add("dot_selected");
	console.log(countDots);
}
function nextP() {
	paragraphes[countP].classList.remove("p_selected");

	if(countP < numberP - 1){
		countP++;
	}
	else {
		countP = 0;
	}
	paragraphes[countP].classList.add("p_selected");
	console.log(countP);
}
next.addEventListener("click", nextSlide);
next.addEventListener("click", nextDot);
next.addEventListener("click", nextP);


function previousSlide() {
	slideshow[count].classList.remove("active");

	if(count > 0){
		count--;
	}
	else {
		count = numberSlides - 1;
	}
	slideshow[count].classList.add("active");
	console.log(count);
}
function previousDot() {
	dots[countDots].classList.remove("dot_selected");

	if(countDots > 0){
		countDots--;
	}
	else {
		countDots = numberDots - 1;
	}
	dots[countDots].classList.add("dot_selected");
	console.log(countDots);
}
function previousP() {
	paragraphes[countP].classList.remove("p_selected");

	if(countP > 0){
		countP--;
	}
	else {
		countP = numberP - 1;
	}
	paragraphes[countP].classList.add("p_selected");
	console.log(countP);
}
previous.addEventListener("click", previousSlide);
previous.addEventListener("click", previousDot);
previous.addEventListener("click", previousP);

