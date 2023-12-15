let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    let password = document.getElementById('PW').value;
    if(password.trim() === ''){
        alert('密碼不能為空!');
        return;
    }
    fetch(form.action, {
        method : "POST",
        body: new FormData(form),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.open('page2.html', '_self');
        console.log("success")
    });
});