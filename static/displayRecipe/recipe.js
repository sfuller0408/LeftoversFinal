console.log("Recipe Page");

// removes the choosen recipe url from path and sends path to server.
function returnToResults() {
    $("#back").click(() => {
        let url = window.location.href.split("/result").shift();
        window.location.replace(url);
    });
}

$(document).ready(returnToResults);