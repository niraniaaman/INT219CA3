var slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide, index) => {
     slide.style.left = `${index * 100}%`
    }
)

var goNext = ()=>{
    counter++
    counter = counter % slides.length
    slideImage()
}
const goPrev = ()=>{
    counter--
    counter = counter % slides.length
    slideImage()
} 

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}



