
var Ulitems=document.getElementById('items');

// why?
var UserEmailId;
// console.log(UserEmail)

function submitForm(event){
var fname=document.getElementById('fname').value;
var UserEmail=document.getElementById('UserEmail').value;
var Userphn=document.getElementById('Userphn').value;
// console.log(fname)
// console.log(UserEmail)
// console.log(Userphn)
fname+=" ";
UserEmail+=" ";
Userphn+=" ";
// localStorage.setItem('fname',fname);
// localStorage.setItem('UserEmail',UserEmail);
// localStorage.setItem('Userphn',Userphn);
// console.log(localStorage.getItem('fname'));

var Ulitems=document.getElementById('items');
var li=document.createElement('li');
// li.style.display='inline';

var button=document.createElement('button')
button.className='btnDelete'
var btnValue=document.createTextNode('Delete')
button.appendChild(btnValue)
var nameNode=document.createTextNode(fname);
var emailNode=document.createTextNode(UserEmail);
var userNode=document.createTextNode(Userphn);

li.appendChild(nameNode);
li.appendChild(emailNode);
li.appendChild(userNode);
li.appendChild(button)
// console.log(li);
Ulitems.appendChild(li)
// Ulitems.appendChild(button)

let PersonDetails={
    name:fname,
    email:UserEmail,
    phn:Userphn
}
let PersonDetails_seralized=JSON.stringify(PersonDetails);
localStorage.setItem(UserEmail,PersonDetails_seralized)
UserEmailId=UserEmail

// localStorage.removeItem(UserEmail)



}
/* 
var SubmitDetails=document.getElementById('SubmitDetails')
it is Not working check later
SubmitDetails.onclick(function(event){
      var li=event.target.parentElement;
      Ulitems.remove(li);
})

*/
var btnDelete=document.getElementsByClassName('btnDelete');
Ulitems.addEventListener('click',removeItem)




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


function removeItem(event){

   if(event.target.classList.contains('btnDelete')){
    var items=Ulitems.getElementsByTagName('li');
    // here it is not working........think why?
    // console.log(items)
    // var itemname2=items.childNodes[1].textContent;
//    console.log(itemname2)

    var li=event.target.parentElement;
    //   console.log(li)
    Ulitems.removeChild(li);
    // console.log(event.target.UserEmail)
    //   localStorage.removeItem(event.target.UserEmail)
          console.log(UserEmail)
        //   remeber this* ==>you have done lot of mistake to implementing this.
          localStorage.removeItem(li.childNodes[1].textContent);  
          



   }
  



}