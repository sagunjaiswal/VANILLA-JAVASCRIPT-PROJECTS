let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

//trail number 2
// const value = document.querySelector("#value");
// const btn_i = document.querySelector(".btni");
// const btn_d = document.querySelector(".btnd");
// const btn_r = document.querySelector(".btnr");

// btn_i.addEventListener("click", (e) => {
//   count++;
//   if (count > 0) {
//     value.style.color = "green";
//   } else if (count < 0) {
//     value.style.color = "red";
//   }
//   if (count === 0) {
//     value.style.color = "#222";
//   }
//   value.textContent = count;
// });
// btn_d.addEventListener("click", (e) => {
//   count--;
//   if (count > 0) {
//     value.style.color = "green";
//   } else if (count < 0) {
//     value.style.color = "red";
//   }
//   if (count === 0) {
//     value.style.color = "#222";
//   }
//   value.textContent = count;
// });
// btn_r.addEventListener("click", (e) => {
//   count = 0;
//   if (count > 0) {
//     value.style.color = "green";
//   } else if (count < 0) {
//     value.style.color = "red";
//   }
//   if (count === 0) {
//     value.style.color = "#222";
//   }
//   value.textContent = count;
// });
