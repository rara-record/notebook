const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    activation(i, btns);
    activation(i, boxs);

    /*
      for (let el of boxs) {
        el.classList.remove("on");
      }

      boxs[i].classList.add("on");
    */
  });
}

function activation(index, list) {
  for(let el of list) {
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}