console.log("Results Page");

function send(recipeUrl) {
    if (typeof window == "undefined") {
        return "results/" + recipeUrl;
    } else {
        let url = window.location.href + recipeUrl;
        window.location.replace(url);
    }
}

// Handles ALL click actions on page. The target of the click action
// holds data for the Recipe Label and URL to ShareAs page.
function getRecipeUrl() {
    $("body").on("click", "button", (tgt) => {
        let recipeUrl = tgt.target.id;
        let recipeLabel = tgt.target.textContent + "/";
        
        // Used to pass URL as URL parameter.
        if(recipeUrl.includes("https://")) {
            recipeUrl = recipeUrl.replace("https://", "");
        } else if(recipeUrl.includes("http://")) {
            recipeUrl = recipeUrl.replace("http://", "");
        }
        
        let url = "/result/" + recipeLabel + encodeURIComponent(recipeUrl);
        send(url);
    });
}

if (typeof window == "undefined") {
    exports.send = send;
} else {
    $(document).ready(getRecipeUrl);
}