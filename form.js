

function submitForm(event){
var fname=document.getElementById('fname').value;
var UserEmail=document.getElementById('UserEmail').value;
var Userphn=document.getElementById('Userphn').value;
console.log(fname)
console.log(UserEmail)
console.log(Userphn)
fname+=" ";
UserEmail+=" ";
Userphn+=" ";
localStorage.setItem('fname',fname);
localStorage.setItem('UserEmail',UserEmail);
localStorage.setItem('Userphn',Userphn);
// console.log(localStorage.getItem('fname'));

var Ulitems=document.getElementById('items');
var li=document.createElement('li');
var nameNode=document.createTextNode(fname);
var emailNode=document.createTextNode(UserEmail);
var userNode=document.createTextNode(Userphn);

li.appendChild(nameNode);
li.appendChild(emailNode);
li.appendChild(userNode);
// console.log(li);
Ulitems.appendChild(li)





}


/*
Localstorage: 
there are three types of storage in browser
1. Cookies, 2. Local Storage , 3. Session Storage.

all them are store in user browser , cooking store ai server also;
it is browser indepent ek mai ho gya to dusra mai nhi hoga.





*/ 



// let myObj={
//     name:"domenic",
//     age:56
// }

// let myObj_seralized=JSON.stringify(myObj);
// localStorage.setItem("myObj",myObj_seralized);
// let myObj_dseralized=JSON.parse(localStorage.getItem("myObj"));
// console.log(myObj_dseralized)