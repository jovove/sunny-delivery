// This is where it all goes :)
window.onload = function () {
  lottie.loadAnimation({
    container: document.getElementById("bm"),  // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/images/qr-animation.json' // the path to the animation json
  });
  console.log("lottie animation loaded")
}
