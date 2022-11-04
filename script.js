const succesful = document.getElementById("conformation");
let user ={
    users:["lossallos","salle1","salle2","salle3","elsaF"],
    password: ["Testpass","salle1","salle2","salle3","elsa!"]
};
let rightUser = false;
function loginFunction(){
    const person = {
         usernameInput: document.getElementById("username").value,
         passwordInput: document.getElementById("password").value
    };
        for(i=0;i<user.users.length;i++){
          
            if(person.usernameInput == user.users[i] && person.passwordInput == user.password[i]){
                succesful.style.color="black"; 
             rightUser=true; 
             i=user.users.length;
            }
        }
    }