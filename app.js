const resultat = document.querySelector("#resultat");
const form = document.querySelector("#form ");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  const c = parseFloat(e.target[0].value);
  const f = c * 1.8 + 32;
  resultat.innerHTML = f;
});
