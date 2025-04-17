window.addEventListener("load", () => {
  const bottles = document.querySelectorAll(".bottle");
  bottles.forEach((bottle, i) => {
    setTimeout(() => {
      bottle.classList.add("show");
    }, i * 300); // delay biar animasinya masuk satu-satu
  });
});