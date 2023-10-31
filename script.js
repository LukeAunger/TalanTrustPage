//Carousel code
const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    //This line checks if the button pressed is next in which it will be 1 otherwise it will be -1
    const offset = button.dataset.carouselButton === "next" ? 1 : -1 
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

//Auto carousel rotation code
function autorotatecarouselfunction() {
    const slides = document.getElementById('Header_Carousel')
    .closest("[data-carousel]")
    .querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + 1
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}
setInterval(autorotatecarouselfunction, 10000);

// Responsive navabr function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
