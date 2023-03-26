const GoBackBtn = document.getElementById("back-btn");

function showText(button) {
    const card = button.closest(".card");
    const text = card.querySelector(".description");
  
    if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
      button.innerHTML = "Show less";
    } else {
      text.style.display = "none";
      button.innerHTML = "Show more";
    }
  }

GoBackBtn.addEventListener("click", () => {
    GoToWeb();
});

function GoToWeb() {
    window.location = "https://lucfercas.github.io/Application-Website/";
}
  
