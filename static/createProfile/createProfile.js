console.log("Create Profile");

function send(username, password, allergies) {
  let url = "/register/username/" + username + "/password/" + password + "/allergies/" + allergies;
  console.log(url);
  window.location.replace(url);
}

function login() {
    let url = "/search";
    window.location.replace(url);
}

function register() {
  let username = $("#username").val();
  let password = $("#password").val();
  let allergies = $("#allergies").val();
  
  send(username, password, allergies);
}

function setup() {
  $("#guest").click(login);
  $("#register").click(register);
}

$(document).ready(setup);