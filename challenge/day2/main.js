let sandwich = document.getElementById("sandwich");
sandwich.addEventListener("click", (event) => {
    event.currentTarget.classList.remove("no-animation");
    event.currentTarget.classList.toggle("active");
    event.currentTarget.style.animationPlayState = "running";
})