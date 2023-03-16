const touch = document.querySelectorAll(".log");
console.log(touch);
touch.forEach((element) => {
  element.addEventListener("click", toggle);
});

const isAuthenticated = true;
function toggle() {
  console.log("get it");
  let flag = false;
  let test = true;
  console.log(flag);
  touch.classList.toggle(flag);
  console.log(flag);
  //   if (flag) {
  //     console.log("ok true");
  //   } else {
  //     console.log("not true");
  //   }
}
