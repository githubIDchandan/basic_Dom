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
// let headerTitle=document.getElementById('header-title');

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

// let mainHeader=document.getElementById('main-header');
// mainHeader.style.borderBottom='solid 3px hsl(0, 0%, 88%)';


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
/*
this work as like jquery work....only diffrence is this will use only for one item.
for more one you canuse queryselectorall.
if class title name more that it obly grab the first one.QUERYSELECTOR
you use any css selector.
for class .
for id #
for item like li;
doument.querySelector(' ')==$('')


*/ 


// let mainHeader=document.querySelector('#main-header');
// mainHeader.style.borderBottom='solid 3px hsl(0, 0%, 88%)';
// let input = document.querySelector('input');
// // it select the fir one.
// input.value="hello world"

// with queryselector we can use any css selector .
// let submit=document.querySelector('input[type=submit]');
// submit.value="SEND";

// let item=document.querySelector('.list-group-item');
// this way not addded style.  
// let item=document.querySelector('.list-group-item list-group-item-info');

// item.style.color='red'


// let lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='yellow'

// let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='blue';

// let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden';


// QUERYSELECTORALL IS SIMILLAR TO GETELMENTBYCLASSNAME/TAGNAME.
// Grab more than one thing

// it give the nodelist.

// let titles=document.querySelectorAll('.title');
// NodeList(2) [h2.title, h2.title]...which simialr to collection
// console.log(titles)
// titles[0].textContent='hello'

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// console.log(odd)
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="grey"

// }
// for(let i=0;i<even.length;i++){
//     even[i].style.backgroundColor='#ccc'
// }


// ==============================================

// TRAVERSING THE DOM.

/*
   kind of moving up and down , loking at parent  node child node and sibling
   like div main is parent for h2 , h2 is child of main , and h2 and form are the sibling because they are same level

*/


// parentNode
var itemlist=document.querySelector('#items');
// you will main div
// console.log(itemlist.parentNode);
// css not applying here.
// itemlist.parentNode.color='#f4f4f4';
// it div container class.
// console.log(itemlist.parentNode.parentNode)
// body
// console.log(itemlist.parentNode.parentNode.parentNode);

// parentElement

// parent node and parentelement are the same thing
// console.log(itemlist.parentElement)
// console.log(itemlist.parentElement.parentElement)



// childNodes
// recoment not use;
// it also contain text(white spaces) with nodelist 
// console.log(itemlist.childNodes)


// children
// it is html collection not a nodelist
// console.log(itemlist.children)
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow'

// firstchild ==> it also having the space problem;===>instead you firstelemntchid
// it will not give you the item1 ;
// console.log(itemlist.firstChild);



// // firstElementchild
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent='Hello 1'


// lastChild

// console.log(itemlist.lastChild);
// // lastElemntchild
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent='Hello 4'



// nextsibling
// gives the text;
// console.log(itemlist.nextSibling)

// nextelementsibling
// console.log(itemlist.nextElementSibling)

// previoussibling

// console.log(itemlist.previousSibling)

// previouselementsibling
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color='red'
// you can see you select anything you want....you dont need jquery
// jquery add file and it will slow the page , you can for other purpose but for dom it is not needed;
// there is nice jquery plugin for thing like animation like when you scroll down , certai thing pop-out
// i mean you can do that through js also but there are really nice jquery plugin available



// createelement

// var newDiv=document.createElement('div');
// console.log(newDiv);

// newDiv.className='hello';
// newDiv.id='hey';
// add attr
// newDiv.setAttribute('title','hello div');
// create text node
// var newdivtxt=document.createTextNode('Hello Chandan');
// console.log(newdivtxt)
// error it is not node;
// newDiv.appendChild(heyyyy)
// newDiv.appendChild(newdivtxt)
// newDiv.style.color='black'
// newDiv.style.fontWeight='bold'



// remember this....
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// container.insertBefore(newDiv,h1)

// var button=document.getElementById('button');

// button.addEventListener('click',function(){
//     console.log('Thank you!!')
// })

// ================================ EVENT ===========================================


// button.addEventListener('click',clickfun)

// function clickfun(event){
    /*
       when you listen for an event and run a function pass in parameter
       console.log(event) get all propertiex that event parameter capture;like class name of element , id , attribute
       postion of mouse , target==>gives the actual elemnt that is clicked==>whatever the element event is fire from
    */ 
    // // console.log('button clicked')
    // document.getElementById('header-title').textContent='changed';
    // document.querySelector('#main').style.backgroundColor='red'
    // console.log(event);
    // console.log(event.target);

    // console.log(event.target.id);
    // console.log(event.target.className);
    // console.log(event.target.classList);
    // var output=document.getElementById('output');
    // output.innerHTML='<h3>'+event.target.id+'</h3>'
    // basically it tell what type of event it is..
    // console.log(event.type)

// from the lef
    // console.log(event.clientX);
    // from the top
    // console.log(event.clientY);
// from the actual position
    // console.log(event.offsetX);
    // console.log(event.offsetY);

//   hold alt key then click will gives true value; same below
    // console.log(event.altKey)
    // console.log(event.ctrlKey)
    // console.log(event.shiftKey)

// }


var button=document.getElementById('button');
var box=document.getElementById('box');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent)
// during mouse presing
// button.addEventListener('mousedown',runEvent)
// during mouse realsing
// button.addEventListener('mouseup',runEvent)
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave',runEvent)
// OVER INSIDE ELEMNT   
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout',runEvent)
// box.addEventListener('mousemove',runEvent)
// var itemInput=document.querySelector('input[type="text"]');
// var form =document.querySelector('form');

// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)

// itemInput.addEventListener('keypress',runEvent)

// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)
// when you cut , cut event will fire
// itemInput.addEventListener('cut',runEvent)
// when you paste , paste event will fire
// itemInput.addEventListener('paste',runEvent)
// itemInput.addEventListener('input',runEvent)
// var select=document.querySelector('select');
// select.addEventListener('change',runEvent)

// form.addEventListener('submit',runEvent);

// function runEvent(event){
// without writing this you can see blink happing in console , that beacuse it 
// submiiting to page it just working like html form in order to no do that you have to prevent
// that from happing 
// event.preventDefault(); 
    // console.log('EVENT TYPE: '+event.type)
    // console.log(event.target.value);
    // document.getElementById('output').innerHTML='<h3>'+event.target.value+'</h3>'

    // output.innerHTML='<h3>MouseX: '+event.offsetX+'</h3><h3>MouseY: '+event.offsetY+'</h3>';

    // box.style.backgroundColor="rgb("+event.offsetX+","+event.offsetY+",40)"


    // document.body.style.display='none'

    // console.log(event.target.value)

// }



