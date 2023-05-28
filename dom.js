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
// headerTitle.textContent="hello"
// headerTitle.innerText="goodBye"
// what is difference between textcontent and inner text
/*
 one diiference is page attention to styling;
console.log(headerTitle.textContent)==>headerTitle.textContent 123;
         <h1 id="header-title" class="text-primary">Item Lister<span
         style="display:none">123</span></h1>==>because of display none 123 disappear;

         if you do;
         console.log(headerTitle.textContent)==>item lister 123===>in console 123 will not disapear;
         console.log(headerTitle.innerText)==>item lister  ==> in cosole 123 will go disapper;
/
  Sl No.

innerText

                                                                     textContent

1.	It returns the visible text contained in a node.	            It returns the full text.
2.	It is much more performance-heavy, as it requires layout information to return the result.	It is not so much performance-heavy, as it doesn’t requires layout information to return the result.
3.	It is defined only for HTMLElement objects.	It is defined for all Node objects.
4.	This property is not supported in IE9 and earlier.	This property is not supported in Internet Explorer 8 and earlier.
/ 
         

*/ 
// h3 is inside h1 now.
// headerTitle.innerHTML='<h3>Hello</h3>'

let mainHeader=document.getElementById('main-header');
mainHeader.style.borderBottom='solid 3px hsl(0, 0%, 88%)';


// GETELEMENTSBYCLASSNAME
// let list=document.getElementsByClassName('list-group-item list-group-item-info');
// console.log(list);
// we select indiviual also.
// console.log(list[1]);
// list[1].textContent="Hello 2";
// list[1].style.fontWeight='bold';
// this is gonna work beacuse it HTMLCollection.
// list[1].style.backgroundColor='red'
// will not gonna work. for that we iterate over collection array.
// list.style.backgroundColor='green'


// for(let i=0;i<list.length;i++){
//     list[i].style.backgroundColor='#f4f4f4';
// }


// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[3].textContent='Hello 4';
// li[3].style.fontWeight='bold';
// this is gonna work because it HTMLCollection.
// li[3].style.backgroundColor='pink';
// will not goona work. for that we iterate over collection array.
// li.style.backgroundColor='grey'
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='pink';
// }



// QUERYSELECTOR ..... 