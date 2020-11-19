console.log("Create Profile");

function send(username, password) {
    let url = "/register/username/" + username + "/password/" + password;
    
    // Returns URL for testing if ran in node.
    if (typeof window == "undefined") {
        return url;
    } else {
        window.location.replace(url);
    }
}

function login() {
    let url = "/search";
    window.location.replace(url);
}

// Used to ensure password and confirm field match.
function checkPassword(password, confirm) {
    if (password == confirm) {
        return true;
    } else {
        return false;
    }
}

function register() {
    let username = $("#username").val();
    let password = $("#password").val();
    let confirm = $("#confirmPassword").val();
    
    // If any of the required fields are not filled, alerts the user
    // and exits out of function.
    if (username == "" || password == "" || confirm == "") {
        alert("All fields must include an input.");
        return;
    } else {
        if (checkPassword(password, confirm)) {
            send(username, password);
        } else {
            alert("The Password and Confirm Password fields must match!");
        }
    }
}

function setup() {
  $("#guest").click(login);
  $("#register").click(register);
}

// Defines if app is running in node or browser.
if (typeof window == "undefined") {
    exports.send = send;
} else {
    $(document).ready(setup);
}