

const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
    navigator.clipboard.writeText("ankitparte80@gmail.com");
    copy.innerHTML = "copied";
    setTimeout(() => {
        copy.innerHTML = null;
    }, 1000);
});






