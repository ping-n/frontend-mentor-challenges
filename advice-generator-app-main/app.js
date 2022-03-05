const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const btn = document.querySelector(".card-action");

const getAdvice = async () => {
  const response = await fetch(`https://api.adviceslip.com/advice`, {
    cache: "no-cache",
  });
  const data = await response.json();
  const { id, advice } = data.slip;

  adviceNumber.innerHTML = id;
  adviceText.innerHTML = advice;
};

window.addEventListener("load", getAdvice());

btn.addEventListener("click", () => {
  if (!btn.classList.contains("spin-in")) {
    btn.classList.remove("spin-out");
    btn.classList.add("spin-in");
  } else {
    btn.classList.remove("spin-in");
    btn.classList.add("spin-out");
  }
  getAdvice();
});
