const itemList=document.querySelector('#item-list');
const addBtn=document.querySelector('.btn');
const itemInput=document.querySelector('#item-input')


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

addBtn.addEventListener('click',addItems);