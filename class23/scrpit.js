function myFunction(){
    var a=4;
    document.getElementById("demon").innerHTML=a*a;
}
function validate(){
    e.preventDefault();

    const email = document.getElementById('email').Value;
    const pass =document.getElementById('password').Value;
    const age =document.getElementById('age').value;
    const msgBox=document.getElementById('messge');
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {

        message = 'Please enter an email.';

        msgBox.style.color = 'red';

    } else if (pass === '') {

        message = 'Password must be at least 8 characters.';

        msgBox.style.color = 'red';

    } else if (age === '') {

        message = 'Age must be between 12 and 50.';

        msgBox.style.color = 'red';

    }

    else {

        message = 'Login successful!';

        msgBox.style.color = 'green';

    }

    msgBox.innerText = message;

}

}
)