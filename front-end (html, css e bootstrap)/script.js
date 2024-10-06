const followBtns = document.querySelectorAll(".follow-btn");

followBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.innerText === "Seguir") {
      btn.innerText = "Seguindo";
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-following");
    } else {
      btn.innerText = "Seguir";
      btn.classList.remove("btn-following");
      btn.classList.add("btn-primary");
    }
  });
});