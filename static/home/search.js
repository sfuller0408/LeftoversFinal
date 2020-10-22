console.log("Hello world");

function send(ingredient) {
    let url = "/search/ingredient/" + ingredient;
    console.log(url);
    window.location.replace(url);
}

function doSearch() {
    let ingredient = $("#searchBar").val();
    send(ingredient);
}

function beginSearch() {
    $("#search").click(doSearch);
}

$(document).ready(beginSearch);