console.log("Sign In Page");

function loginAsGuest() {
    let url = "/search";
    if (typeof window == "undefined") {
        return url;
    } else {
        window.location.replace(url);
    }
}
    
 function createProfile() {
    let url = "/createProfile";
    if (typeof window == "undefined") {
        return url;
    } else {
        window.location.replace(url);
    }
}

function doAction() {
    $("#guest").click(loginAsGuest);
    $("#createProfile").click(createProfile);
}

if (typeof window == "undefined") {
    exports.loginAsGuest = loginAsGuest;
    exports.createProfile = createProfile;
} else {
    $(document).ready(doAction);
}