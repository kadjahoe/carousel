/*
 *** Title: Carousel Slider
 *** Author: Katherine Adjahoe
 *** website: https://katherineadjahoe.com
 */
const slides = document.getElementsByClassName('carousel-item')
const totalSlides = slides.length
let startingPosition = 0
const time = 5000
let playSlideShow = setInterval(slideShow, time)
let timeOut = ''
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)

function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function slideShow() {
    hideAllSlides()
    startingPosition === (totalSlides - 1) ? startingPosition = 0 : startingPosition++
        slides[startingPosition].classList.add('carousel-item-visible')
}

function moveToPrevSlide() {
    stopAutoPlay(playSlideShow)
    hideAllSlides()
    startingPosition === 0 ? startingPosition = (totalSlides - 1) : startingPosition--
        slides[startingPosition].classList.add('carousel-item-visible')
    startAutoPlay()
}

function moveToNextSlide() {
    stopAutoPlay(playSlideShow)
    slideShow()
    startAutoPlay()
}

function stopAutoPlay(intervalId) {
    clearInterval(intervalId)
}

function startAutoPlay() {
    if (timeOut != '') {
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            playSlideShow = setInterval(slideShow, time)
        }, time)
    } else {
        timeOut = setTimeout(() => {
            playSlideShow = setInterval(slideShow, time)
        }, time)
    }
}