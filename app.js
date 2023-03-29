const tipCuenta = document.querySelector('nuevo');
const email = document.getElementById('email');
const pasword = document.getElementById('pasword')
const log_in = document.getElementById('log_in');




log_in.addEventListener('click',()=>{
    if (email === "ADMIN"){
        if (pasword === "ADMIN"){
            //aqui pongo el siguiente usuario .html
        }else{return;}
    }else { alert("User or Pasword is not correrct. Pleace try again")}
} )

tipCuenta.addEventListener("click", ()=>{
 } )