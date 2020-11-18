console.log("Search Page");

function doSearch(ingredients) {
    if (ingredients == "") {
        return;
    }
    let url = "/search/ingredients/" + ingredients;
    if (typeof window == "undefined") {
        return url;
    } else {
        window.location.replace(url);
    }
}

function beginSearch() {
    $("#search").click(() => {
        let ingredients = $("#searchBar").val();
        doSearch(ingredients);
    });
}
if (typeof window == "undefined") {
    exports.doSearch = doSearch;
} else {
    $(document).ready(beginSearch);
}