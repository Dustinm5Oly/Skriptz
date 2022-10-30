let $addserviceForm = document.querySelector("#addserviceForm");
let iconVar = document.querySelectorAll('.serviceIcons');
let createBtn = document.querySelector('#createBtn');

let submitHandler = async (e) => {
    e.preventDefault();
    let name = document.querySelector('#inputName').value.trim();
    let price = document.querySelector('#inputPrice').value.trim();
    let due_day= document.querySelector('#inputDue').value.trim();

    let subscription_username = document.querySelector('#inputSubName').value.trim();
    let password_hint = document.querySelector('#inputpassHint').value.trim();

if(name && price && due_day ){
const response = await fetch('/api/service', {
    method: 'POST',
    body: JSON.stringify({name, price, due_day, subscription_username, password_hint }),
});
if(response.ok){

} else {
    alert('Something Went Wrong');
}
}
}
$addserviceForm.addEventListener('submit', submitHandler);
function iconClick(e){
    createBtn.click();
    document.querySelector('#inputName').value = e.target.nextElementSibling.textContent 
    document.querySelector('#inputCat').value = e.target.getAttribute('data-cata')
}
iconVar.forEach((icon)=> {
    icon.addEventListener('click', iconClick)
})
