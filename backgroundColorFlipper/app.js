const colors = [
  "green",
  "red",
  "grey",
  "yellow",
  "black",
  "pink",
  //   "#F08080",
  //   "#FA8072",
  //   "	#00FF00",
  //   "#E9967A",
  //   "	#FF00FF",
  //   "#CD5C5C",
  //   "rgba(133,122,200)",
  //   "#f15025",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //get random number bertween 0 - 3
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
