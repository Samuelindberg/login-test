const succesful = document.getElementById("conformation");
const form = document.querySelector("form");
let user = {
  users: ["lossallos", "salle1", "salle2", "salle3", "elsaF"],
  password: ["Testpass", "salle1", "salle2", "salle3", "elsa!"],
};
let rightUser = false;
function loginFunction() {
  const person = {
    usernameInput: document.getElementById("username").value,
    passwordInput: document.getElementById("password").value,
  };
  for (i = 0; i < user.users.length; i++) {
    if (
      person.usernameInput == user.users[i] &&
      person.passwordInput == user.password[i]
    ) {
      rightUser = true;
      i = user.users.length;
    }
  }
}
form.addEventListener("submit",function(event){
    event.preventDefault()
    loginFunction()
    if (rightUser) {
        succesful.style.color = "black";
      } else{
        succesful.textContent ="wrong password";
        succesful.style.color = "red";
    }
    //   reset form
      document.getElementById("username").value="";
      document.getElementById("password").value="";
})