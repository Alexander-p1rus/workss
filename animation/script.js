const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

function animetion() {
  let pos = 0;
  let id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
      box.style.top = pos + "px";
    }
  }
}

btn.addEventListener("click", animetion);