const touch = document.querySelectorAll(".log");
console.log(touch);
touch.forEach((element) => {
  element.addEventListener("click", toggle);
});

function toggle() {
  console.log("get it");
  let flag = false;
  let test = true;
  console.log(flag);
  touch.classList.toggle(test);
  console.log(flag);
  //   if (flag) {
  //     console.log("ok true");
  //   } else {
  //     console.log("not true");
  //   }
}
