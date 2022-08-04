function find() {
  let name = prompt("What's your name?");
  let time = prompt("What is the current hour?");
  let cofe = prompt("What coffee would you like?");
  if (time < 12) {
    alert("Good morning! " + name + " your " + cofe + " is ready soon!");
  } else {
    if (time >= 18) {
      alert("Good evening! " + name + " your " + cofe + " is ready soon");
    } else {
      alert("Good afternoon! " + name + " your " + cofe + " is ready soon");
    }
  }
}
let findButton = document.querySelector(".find-button");
findButton.addEventListener("click", find);
