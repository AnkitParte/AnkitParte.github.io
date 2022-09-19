

const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
    navigator.clipboard.writeText("ankitparte80@gmail.com");
    copy.innerHTML = "copied";
    setTimeout(() => {
        copy.innerHTML = null;
    }, 1000);
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}




