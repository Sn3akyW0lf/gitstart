
//Form Fuctionality

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg_user = document.querySelector('#msg_user');
const msg_email = document.querySelector('#msg_email');
var counter = 0;

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(name.value === ''){
        msg_user.style.color = 'chocolate';
        msg_user.style.background = 'beige';  
        msg_user.innerHTML = 'PLease Enter Name!';
        setTimeout(() => msg_user.remove(), 3000);
    } else if (email.value === '') {
        msg_email.style.color = 'chocolate';
        msg_email.style.background = 'beige';  
        msg_email.innerHTML = 'PLease Enter Email!';
        setTimeout(() => msg_email.remove(), 3000);
    } else {
        localStorage.setItem(`10${counter}`, `Name - ${name.value}, Email - ${email.value}`);
        counter++;
    }

}


// Buttons Events

const click = document.querySelector('#click');
const hover = document.querySelector('#hover');
const mouseOut = document.querySelector('#mouse-out');

click.addEventListener('click', (e) => {
    alert('SURPRISE!!');
});

hover.addEventListener('mouseover', (e) => {
    document.querySelector('body').style.background = '#222';
});

mouseOut.addEventListener('mouseout', (e) => {
    document.querySelector('body').style.background = "#679324";
});
