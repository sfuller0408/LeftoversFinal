/**
 * Shows js for home page loaded.
 */
console.log("Hello world");

function login() {
    let url = "/search";
    window.location.replace(url);
}

function signIn() {
    $("#guest").click(login);
}

$(document).ready(signIn);