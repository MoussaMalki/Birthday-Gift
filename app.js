// ================> scrolling animation
let doc = document;
let log = console.log;

// const sr = ScrollReveal({
//   distance: `60px`,
//   duration: 2500,
//   delay: 400,
//   reset: true,
//   mobile: true,
// });

// sr.reveal(`.logo`, { delay: 200, origin: `bottom` });
// sr.reveal(`.nav-bar`, { delay: 200, origin: `right` });
// sr.reveal(`#menu-icon`, { delay: 200, origin: `left` });

let button = doc.querySelector(`#birthdayBox`);
let videoContainer = doc.querySelector(`#birthdayVideo`);
let video = doc.querySelector(`#video`);

button.onclick = () => {
  button.style.cssText = `display: none`;
  setTimeout(() => {
    catBirthdayVideo();
  }, 500);
};

function catBirthdayVideo() {
  videoContainer.style.cssText = `display: initial`;
  video.autoplay = true;
  video.load();

  video.addEventListener("ended", myHandler, false);
  function myHandler(e) {
    setTimeout(() => {
      balloonsAndFireWorks();
    }, 500);
  }
}
function balloonsAndFireWorks() {
  videoContainer.style.cssText = `display: none`;
  doc.querySelector(`#hiddenSec`).style.cssText = `display: initial`;
  doc.querySelector(`#theTitle`).style.cssText = `display: initial`;
  var audio = new Audio("Fire.mp3");
  audio.play();
  createBalloons(100);

  setTimeout(() => {
    finalMessage();
  }, 9000);
}
function finalMessage() {
  alert(`happy birthday Mariem, one of the best teachers even 3>`);
}

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container");
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}
