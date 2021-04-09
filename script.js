var title = document.getElementById("mainTitle")

var text = "Inferno343's";

var splitText = text.split('')
let pointer = 0;
console.log(splitText)

setInterval(animateTitle, 500)

function animateTitle() {
  if (title.innerHTML.length == splitText.length) {
    title.innerHTML = "";
    pointer = 0;
  }

  title.innerHTML = title.innerHTML + splitText[pointer]
  pointer++;
}