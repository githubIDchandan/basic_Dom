var form=document.getElementById('addForm')
// form submit event;
var ulList=document.getElementById('items');
var filter=document.getElementById('filter');


form.addEventListener('submit',addItem);
/*
var deleteB=document.getElementsByClassName('delete');
console.log(deleteB)
Event not working
deleteB.addEventListener('click',removeItem);
*/

ulList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);
// add category
var category=document.getElementById('category');

// add item
function addItem(event){

event.preventDefault();
// console.log(1)

    var Inpvalue=document.getElementById('item').value;
    var categoryVal=" "
    categoryVal+=category.value;

    var li=document.createElement('li');
    // console.log(li);
    li.className='list-group-item list-group-item-info';
    var nodeval=document.createTextNode(Inpvalue);
    var nodeval2=document.createTextNode(categoryVal);
    // nodeval+=nodeval2;
    // console.log(nodeval)
    li.appendChild(nodeval);
    li.appendChild(nodeval2)
    console.log(li);
    var ulList=document.getElementById('items');
    ulList.appendChild(li);
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-dark float-lg-end delete2';
    var editBtnvalue=document.createTextNode('Edit');
    editBtn.appendChild(editBtnvalue);
    li.appendChild(editBtn)
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-dark btn-danger float-lg-end delete1';
    // console.log(deleteBtn)
    var deleteBtnVal=document.createTextNode('❌');
    deleteBtn.appendChild(deleteBtnVal)
    li.appendChild(deleteBtn);


 










}


// add category



// removeItem;

function removeItem(event){
    // console.log(event.target.value)
    if(event.target.classList.contains('delete1')){
        // console.log(event.target)
        // if(confirm('Are You Sure?')){
        //     console.log(event.target)
        // }

        console.log(event.target.parentElement)
        var li=event.target.parentElement;
        ulList.removeChild(li);
    
    
}

}



function filterItems(event){
  var text=event.target.value.toLowerCase();
  var text2=event.target.value.toLowerCase();

//   console.log(text)
//    ul ke under jitne bhi li item hai wo gaya items ke under==Htmlcollectio
  var items=ulList.getElementsByTagName('li');
//   console.log(items)
// itemname2 is notworking here?
// var itemname2=items.childNodes[1].textContent;
// console.log(itemname2)

Array.from(items).forEach(function(containtName){
    // console.log(containt)
    var itemname=containtName.firstChild.textContent;
    var itemname2=containtName.childNodes[1].textContent;


    // console.log(itemname2)
    // console.log(text)
    // console.log(scond)
    if((itemname.toLowerCase().indexOf(text)!=-1)||(itemname2.toLowerCase().indexOf(text)!=-1)){
        containtName.style.display='block';
    }   
    else{
        containtName.style.display='none'
    }

});

}

