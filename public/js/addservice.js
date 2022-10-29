let $addserviceForm = document.querySelector("#addserviceForm");

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
}
}
$addserviceForm.addEventListener('submit', submitHandler);