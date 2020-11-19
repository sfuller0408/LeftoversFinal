console.log("Sign In Page");

function loginAsGuest() {
    let url = "/search";
    if (typeof window == "undefined") {
        return url;
    } else {
        window.location.replace(url);
    }
}

function loginWithProfile(username, password) {
    let url = "/" + username + "/" + password + "/search";
    window.location.replace(url);
}

function getFields() {
    let username = $("#username").val();
    let password = $("#password").val();
    if (username == "" || password == "") {
        alert("All fields must have an input.");
        return;
    } else {
        loginWithProfile(username, password);
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
    $("#profile").click(getFields);
}

if (typeof window == "undefined") {
    exports.loginAsGuest = loginAsGuest;
    exports.createProfile = createProfile;
} else {
    $(document).ready(doAction);
}