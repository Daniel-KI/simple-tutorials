const currentSlideClass = "slide_selected";
const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  const slides = [...carousel.querySelectorAll(".slide")];
  const prevBtn = carousel.querySelector(".controls__btn_prev");
  const nextBtn = carousel.querySelector(".controls__btn_next");
  const dots = [...carousel.querySelectorAll(".dot")];

  nextBtn.addEventListener("click", () => {
    changeCurrentSlide(slides, true);
  });

  prevBtn.addEventListener("click", () => {
    changeCurrentSlide(slides, false);
  });

  dots.map((dot, index) => {
    dot.addEventListener("click", () => {
      const currentSlide = slides.find((slide) =>
        slide.classList.contains(currentSlideClass)
      );
      const nextSlide = slides[index];

      if (currentSlide && nextSlide) {
        switchSlides(currentSlide, nextSlide);
      }
    });
  });
});

function switchSlides(oldSlide, newSlide) {
  oldSlide.classList.remove(currentSlideClass);
  newSlide.classList.add(currentSlideClass);

  newSlide.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
    inline: "end",
  });
}

function getNextSlide(slides, predictedNextSlideIndex) {
  if (predictedNextSlideIndex < 0) {
    return slides[slides.length - 1];
  }

  if (predictedNextSlideIndex > slides.length - 1) {
    return slides[0];
  }

  return slides[predictedNextSlideIndex];
}

function changeCurrentSlide(slides, forward) {
  slides.every((slide, index) => {
    const isCurrentSlide = slide.classList.contains(currentSlideClass);

    if (isCurrentSlide) {
      const predictedNextSlideIndex = forward ? index + 1 : index - 1;
      const nextSlide = getNextSlide(slides, predictedNextSlideIndex);

      switchSlides(slide, nextSlide);

      return false;
    } else {
      return true;
    }
  });
}
