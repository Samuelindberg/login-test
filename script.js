let user = ["lossallos","Testpass"];
function loginFunction(){
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(userName==user[0] && password==user[1]){
        alert("rätt uppgifter");
    }   
    else{
        alert("fel uppgifter");
    }
}