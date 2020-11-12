console.log("Hello world");
    
class SearchPage {
    SearchPage() {}
    
    doSearch() {
        let ingredients = $("#searchBar").val();
        // Does nothing if ingredients is blank.
        if (ingredients == "") {
            return;
        }
        let url = "/search/ingredients/" + ingredients;
        send(url);
    }
}

let webpage = new SearchPage();

function send(url) {
    console.log(url);
    window.location.replace(url);
}

function beginSearch() {
    $("#search").click(webpage.doSearch);
}

$(document).ready(beginSearch);