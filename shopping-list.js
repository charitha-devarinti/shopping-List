const itemList=document.querySelector('#item-list');
const addBtn=document.querySelector('.btn');
const itemInput=document.querySelector('#item-input');
const clearAllBtn=document.getElementById('clear')


function addItems(e){
    e.preventDefault();
    const inputValue= itemInput.value;
   
    if(itemInput.value.trim() ===''){
      return  alertMessage();  
    } 

    const liEle=document.createElement('li');
    const liText=document.createTextNode(`${inputValue}`);
   
    const button=createButton('remove-item btn-link text-red');
     liEle.appendChild(liText);
     liEle.appendChild(button);
     itemList.appendChild(liEle);

     itemInput.value='';
}

function createButton(classes){
   const button=document.createElement('button');
   button.className=classes;
   const icon= createIcon('fa-solid fa-xmark');
   button.appendChild(icon);
   return button;
}

function createIcon(classes){
    const icon=document.createElement('i');
    icon.className=classes;
    return icon;
}

let hideTimeout;
function alertMessage(){
    const alertMsg=document.querySelector('.alert-msg');
      alertMsg.innerText='please fill the above field.......'
    // clearing the timer iff before in case it exsits
      clearTimeout(hideTimeout);
      // hiding the message after  seconds
    hideTimeout= setTimeout(()=>{
       alertMsg.innerText='';
    },2000)

}


function removeItems(e){
  if(e.target.parentElement.classList.contains('remove-item')){
    e.target.parentElement.parentElement.remove();
  }
}

function clearAll(){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
  }
 // itemList.innerHTML='';
}


addBtn.addEventListener('click',addItems);
itemList.addEventListener('click',removeItems);
clearAllBtn.addEventListener('click',clearAll);