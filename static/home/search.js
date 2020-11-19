console.log("Search Page");

function doSearch(ingredients) {
    if (ingredients == "") {
        
        // If running in node, mocha does not recognize alert message.
        if (typeof window == "undefined") {
            return;
        } else {
            alert("Must include an input to search by.");
            return;
        }
    }
    let url = "/search/ingredients/" + ingredients;
    
    // Returns URL for testing if ran in node.
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

// Defines if app is running in node or browser.
if (typeof window == "undefined") {
    exports.doSearch = doSearch;
} else {
    $(document).ready(beginSearch);
}