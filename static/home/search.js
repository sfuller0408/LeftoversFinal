console.log("Hello world");

function send(ingredients) {
    let url = "/search/ingredients/" + ingredients;
    console.log(url);
    window.location.replace(url);
}

function doSearch() {
    let ingredients = $("#searchBar").val();
    // Does nothing if ingredients is blank.
    if (ingredients == "") {
        return;
    }
    send(ingredients);
}

function beginSearch() {
    $("#search").click(doSearch);
}

$(document).ready(beginSearch);