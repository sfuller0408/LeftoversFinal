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

function checkPassword(password) {
    let confirm = $("#confirmPassword").val();
    
    if (password == confirm) {
        return true;
    } else {
        return false;
    }
}

function register() {
    let username = $("#username").val();
    let password = $("#password").val();
    
    if (checkPassword(password)) {
        send(username, password);
    } else {
        alert("The Password and Confirm Password fields must match!");
    }
}

function setup() {
  $("#guest").click(login);
  $("#register").click(register);
}

$(document).ready(setup);