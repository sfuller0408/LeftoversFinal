console.log("Hello world");

function signIn() {
    $("#guest").click(() => {
        window.location.replace("/search");
    });
}

$(document).ready(signIn);