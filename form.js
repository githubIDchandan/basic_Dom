

function submitForm(e){
var fname=document.getElementById('fname').value;
var UserEmail=document.getElementById('UserEmail').value;
var Userphn=document.getElementById('Userphn').value;
// console.log(fname)
// console.log(UserEmail)
// console.log(Userphn)

localStorage.setItem('fname',fname);
localStorage.setItem('UserEmail',UserEmail);
localStorage.setItem('Userphn',Userphn);
console.log(localStorage.getItem('fname'));





}


/*
Localstorage: 
there are three types of storage in browser
1. Cookies, 2. Local Storage , 3. Session Storage.

all them are store in user browser , cooking store ai server also;
it is browser indepent ek mai ho gya to dusra mai nhi hoga.





*/ 