// Hero Carousel

const slider1 = document.querySelector('#glide_1');

document.addEventListener('DOMContentLoaded', () => {

if (slider1) {
  new Glide(slider1, {
    type: 'carousel',
    startAt: 0,
    //autoplay: 3000,
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: 'linear',
  }).mount();
}

  });

  /*This block of code creates a new Glide object and calls its mount() method to initialize the carousel.
   The Glide constructor takes two arguments: the slider1 constant (the DOM element to attach the carousel to),
    and an options object that sets various configuration properties for the carousel. Here are the options used
 in this example:

type: 'carousel': Sets the type of the carousel to "carousel" (other types are "slider" and "gallery").
startAt: 0: Sets the index of the starting slide to 0 (the first slide).
gap: 0: Sets the space between slides to 0 pixels.
hoverpause: true: Pauses the autoplay of the carousel when the user hovers over it with the mouse.
perView: 1: Sets the number of slides visible on the screen at once to 1.
animationDuration: 800: Sets the duration of slide transitions to 800 milliseconds.
animationTimingFunc: 'linear': Sets the timing function of slide transitions to "linear" (other options
are "ease", "ease-in", "ease-out", "ease-in-out", and "cubic-bezier").
autoplay: 3000,: This option sets the autoplay interval to 3000 milliseconds (3 seconds). With autoplay enabled,
the carousel will automatically transition to the next slide every 3 seconds, unless the user interacts with it 
(e.g., by clicking on a slide or hovering over the carousel).*/ 