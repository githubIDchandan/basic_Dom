var form=document.getElementById('addForm')
// form submit event;
var ulList=document.getElementById('items');


form.addEventListener('submit',addItem);
/*
var deleteB=document.getElementsByClassName('delete');
console.log(deleteB)
Event not working
deleteB.addEventListener('click',removeItem);
*/

ulList.addEventListener('click',removeItem);



// add item
function addItem(event){

event.preventDefault();
// console.log(1)

    var Inpvalue=document.getElementById('item').value;

    var li=document.createElement('li');
    // console.log(li);
    li.className='list-group-item list-group-item-info';
    var nodeval=document.createTextNode(Inpvalue);
    li.appendChild(nodeval);

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