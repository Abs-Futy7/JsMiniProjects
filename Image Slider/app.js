const slides = document.querySelectorAll(".slide")

var count = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goPrevious = () =>{
    count--;
    if (count < 0) {
        count = slides.length - 1; // Wrap around to the last slide
    }
    slideImage();
}
const goNext = () =>{
    count++;
    if (count >= slides.length) {
        count = 0; // Wrap around to the first slide
    }
    slideImage();
}
const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform =`translateX(-${count * 100}%)`
        }
    )
}