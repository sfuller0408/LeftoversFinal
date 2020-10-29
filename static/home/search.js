console.log("Hello world");

function send(ingredients) {
    let url = "/search/ingredients/" + ingredients;
    console.log(url);
    window.location.replace(url);
}

function doSearch() {
    let ingredients = $("#searchBar").val();
    send(ingredients);
}

function beginSearch() {
    $("#search").click(doSearch);
}

$(document).ready(beginSearch);