console.log("Create Profile");

function send(username, password) {
  let url = "/register/username/" + username + "/password/" + password;
  console.log(url);
  window.location.replace(url);
}

function login() {
    let url = "/search";
    window.location.replace(url);
}

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

$(document).ready(setup);