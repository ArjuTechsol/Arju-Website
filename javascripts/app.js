//////////////////////////////////////// Js for Routing //////////////////////////////////////////////////////////////

function loadPage(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}

function navigateTo(page) {
    window.location.hash = page;
    loadPage(page + ".html");
}

window.addEventListener("hashchange", function () {
    const page = window.location.hash.slice(1);
    loadPage(page + ".html");
});

// Initial page load
if (window.location.hash) {
    const initialPage = window.location.hash.slice(1);
    loadPage(initialPage + ".html");
} else {
    loadPage("index.html");
}