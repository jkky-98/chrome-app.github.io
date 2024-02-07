const images = [
  "b1.jpeg",
  "b2.jpeg",
  "b3.jpeg",
  "b4.jpeg",
  "b5.jpeg",
  "b6.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector(".bg");
bgImage.src = `img/${chosenImage}`;
