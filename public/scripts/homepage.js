let $signupForm = document.querySelector("#signupForm");
let $loginForm = document.querySelector("#loginForm");

let loginHandler = async (e) => {
    e.preventDefault();
    let email = document.querySelector("#exampleInputEmail").value.trim();
    let password = document.querySelector("#exampleInputPassword").value.trim();

    console.log(email, password);

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            location.replace('/current_services');
        } else {
            alert("Something Went Wrong");
        }
    } else {
        alert("Please complete all fields");
    }
}

let submitHandler = async (e) => {
    e.preventDefault();
    let first_name = document.querySelector("#inputFirstName").value.trim();
    let last_name = document.querySelector("#inputLastName").value.trim();
    let email = document.querySelector("#inputEmail").value.trim();
    let user_name = document.querySelector("#inputUsername").value.trim();
    let password = document.querySelector("#inputPassword").value.trim();

    if (first_name && last_name && email && user_name && password) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({user_name, password, first_name, last_name, email}),
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
            location.replace('/add_service')
        } else {
            alert("Something Went Wrong")
        }
    } else {
        alert("Please complete all fields")
    }
}


$loginForm.addEventListener("submit", loginHandler);
$signupForm.addEventListener("submit", submitHandler);
