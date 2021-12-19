const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "yellow",
  "skyblue",
  "#8DB600",
  "quamarine",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   console.log(document.body);
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
