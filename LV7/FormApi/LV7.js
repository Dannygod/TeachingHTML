let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.open('page2.html', '_blank');
        console.log("success")
    });
});