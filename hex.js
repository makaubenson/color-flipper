const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//get html element with the id btn
const btn = document.getElementById("btn");
//get html element with the class color
const color = document.querySelector(".color");
//get listen to events on a button and execute a block of code
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    // console.log(i);//generates 1 to 5
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
