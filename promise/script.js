const btn = document.querySelector("button"),
  inp = document.querySelector("input")

function onDataRecived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    console.log(img);
    document.querySelector("body").append(img);
  });
}

btn.addEventListener("click", () => {
  getData(inp.value, onDataRecived);
});
