/*
dir() is the way to see all the properties of a
specified JavaScript object in console by which
the developer can easily get the properties of
the object
*/


// console.dir(document)
// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title)
// document.title="change kr skte hai"
// console.log(document.doctype)
// console.log(document.head);
// console.log(document.body);
// console.log(document.all)
// console.log(document.all[10]);
// this is not right way to select , beacuse html update line number will change;
// document.all[10].textContent="hello";
// ? what is html collection
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)



// var headerTitle=document.getElementById('header-title');
// ?
let headerTitle=document.getElementById('header-title');

// console.log(headerTitle)
headerTitle.textContent="hello"
headerTitle.innerText="goodBye"
// what is difference between textcontent and inner text
/*
 one diiference is page attention to styling;
console.log(headerTitle.textContent)==>headerTitle.textContent 123;
         <h1 id="header-title" class="text-primary">Item Lister<span
         style="display:none">123</span></h1>==>because of display none 123 disappear;

         if you do;
         console.log(headerTitle.textContent)==>item lister 123===>in console 123 will not disapear;
         console.log(headerTitle.innerText)==>item lister  ==> in cosole 123 will go disapper;

*/ 
