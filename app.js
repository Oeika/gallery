function slidesPlagin(activeSlide) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')
  
  
  
  for (const slide of slides){
      slide.addEventListener('click', () => {
      //  clearActiveClasses()
        
        slide.classList.add('active')
      })
  }
  
  function clearActiveClasses() {
     slides.forEach((slide) => {
      slides.classList.remove('active')
     })
  }
}

slidesPlagin(4) 