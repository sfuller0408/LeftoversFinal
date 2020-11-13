/**
 * Shows js for home page loaded.
 */
console.log("Hello world");

class signIn {
    login() {
        let url = "/search";
        window.location.replace(url);
    }
    
    createProfile() {
        let url = "/createProfile";
        window.location.replace(url);
    }
}

let webpage = new signIn(); 

function doAction() {
    $("#guest").click(webpage.login);
    $("#createProfile").click(webpage.createProfile);
}


$(document).ready(doAction);