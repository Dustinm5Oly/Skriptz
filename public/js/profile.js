const $submitButton = document.getElementById('submit-pro-btn');

async function logSubmit(event) {
    const first_name = document.getElementById('first-name').value;
    const last_name = document.getElementById('last-name').value;
    const user_name = document.getElementById('user-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pro-pswd').value;
    const reqObj = {};
    
    if (first_name) reqObj.first_name = first_name;
    if (last_name) reqObj.last_name = last_name;
    if (user_name) reqObj.user_name = user_name;
    if (email) reqObj.email = email;
    if (password) reqObj.password = password;


    // fetch call to the userData.js

    let response = await fetch('/api/user', { 
        method: 'PUT', // PUT posts data
        body: JSON.stringify(reqObj),
        headers: { 'Content-Type': 'application/json' },
    });

    (response.ok) ? alert('Changes saved!') : alert('Oops, something went wrong. Please try again.')

  }





// const log = document.getElementById('log');
$submitButton.addEventListener('click', logSubmit);