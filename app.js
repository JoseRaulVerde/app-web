const tipCuenta = document.querySelector('nuevo');
const email = document.getElementById('email');
const pasword = document.getElementById('pasword')
const log_in = document.getElementById('log_in');



log_in.addEventListener('click',()=>{
    console.log(email.value);
    if (email.value === "ADMIN"){
        if (pasword.value === "ADMIN"){
            alert("entraste")//aqui pongo el siguiente usuario .html
        }else{return;}
    }else { alert("User or Pasword is not correrct. Pleace try again")}
} )