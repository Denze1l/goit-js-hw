// const btn = document.querySelector("button");
// let count =0
// btn.onclick = function(evt){
//   evt.target.textContent=count +=1
// }




{/* <button class="btn" data-action="sub">-1</button>
<span class="value">0</span>
<button class="btn" data-action="add">+1</button> */}


// const sub = document.querySelectorAll('.btn[data-action="sub"]')
// const add = document.querySelector('.btn[data-action="add"]')
// const value = document.querySelector(".value")
// let count =0;

// sub.onclick = function(){
//     value.textContent = count -=1
// };

// add.onclick = function(){
//     value.textContent = count +=1
// }




// Работа  с формой!
function QuestionForm(event){
   event.preventDafault(); 
const form =event.currentTarget;
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const passwordInput = form.elements.password;
const subscribtionValue = form.elements.subscribtion.value
console.dir(form.elements);
const data ={
    [nameInput.name]: nameInput.value,
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
    subscribtionValue
}

 
}