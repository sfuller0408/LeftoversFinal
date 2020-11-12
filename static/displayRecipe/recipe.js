console.log("Finally made it!");

class RecipePage {
    goBack() {
        let url = window.location.href.split("/result").shift();
        console.log(url);
        window.location.replace(url);
    }
}

let webpage = new RecipePage();

function returnToResults() {
    $("#back").click(webpage.goBack);
}

$(document).ready(returnToResults);