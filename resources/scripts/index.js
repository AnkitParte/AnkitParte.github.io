

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

GitHubCalendar(".calendar", "AnkitParte");

// or enable responsive functionality:
GitHubCalendar(".calendar", "AnkitParte", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "your-username", {
    proxy(username) {
        return fetch(`https://your-proxy.com/github?user=${username}`)
    }
}).then(r => r.text())




