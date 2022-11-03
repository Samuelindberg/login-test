let user ={
    userName:["lossallos","salle1"],
    passwordInfo: ["Testpass","Salle1"]
};

function loginFunction(){
    const person = {
         usernameInput: document.getElementById("username").value,

         passwordInput: document.getElementById("password").value
    };
         if(person.usernameInput == user.userName[0] && person.passwordInput == user.passwordInfo[0]){
          
            alert("rätt uppgifter");
        }   
}


