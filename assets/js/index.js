const animeContainer = document.querySelector("#animeend");
const btns = document.querySelectorAll(".trigger");

setTimeout(() => {
  dropStack();
}, 1100);

function dropStack() {
  let val = 62;
  //   console.log(btns.length);
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.top = `${val}px`;
    val = val + 62;
  }
  clearTimeout();
}
