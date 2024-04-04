let toggler = document.getElementById('switch');

toggler.addEventListener("click", () => {
    document.body.style.backgroundColor = (toggler.checked) ? "black" : "white";
})