const itemForm=document.getElementById('item-form')

const itemList=document.querySelector('#item-list');
const addBtn=document.querySelector('.btn');
const itemInput=document.querySelector('#item-input');
const clearAllBtn=document.getElementById('clear');
const filterEle=document.querySelector('.filter')



function addItems(e){
    e.preventDefault();
    const inputValue= itemInput.value;
   
    if(itemInput.value.trim() ===''){
      return  alertMessage();  
    } 

   creatingItems(inputValue)  ;

    checkingUI();
    
    additemsToStorage(inputValue);

     itemInput.value='';
}

function   creatingItems(item){
  const liEle=document.createElement('li');
    const liText=document.createTextNode(`${item}`);
   
    const button=createButton('remove-item btn-link text-red');
     liEle.appendChild(liText);
     liEle.appendChild(button);
     itemList.appendChild(liEle);
     
}

function additemsToStorage(item){
    const storingItems=JSON.parse(localStorage.getItem('items'))||[];
    storingItems.push(item);
    localStorage.setItem('items',JSON.stringify(storingItems));
    console.log(storingItems)
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
    if(confirm('are you want to delete this ?')){
       e.target.parentElement.parentElement.remove();
    }
   
  }

  checkingUI();
}

function clearAll(){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
  }
 // itemList.innerHTML='';
 checkingUI();
}

function checkingUI(){
   const items=itemList.querySelectorAll('li');
   if(items.length===0){
        filterEle.style.display="none";
        clearAllBtn.style.display="none";
   }else{
         filterEle.style.display="block";
        clearAllBtn.style.display="block";
   }
      
}

function filterItems(e){
      const items=itemList.querySelectorAll('li');
    const  text=e.target.value.toLowerCase();
       items.forEach((item)=>{
          const itemName=item.firstChild.textContent.toLowerCase();
           if(itemName.indexOf(text)!==-1){
              item.style.display='flex';
           }else{
             item.style.display='none';
           }
       })
}





itemForm.addEventListener('submit',addItems);
itemList.addEventListener('click',removeItems);
clearAllBtn.addEventListener('click',clearAll);
filterEle.addEventListener('input',filterItems)

checkingUI();