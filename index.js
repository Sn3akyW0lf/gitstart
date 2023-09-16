
//Form Fuctionality

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const msg_user = document.querySelector('#msg_user');
const msg_email = document.querySelector('#msg_email');
const msg_phone = document.querySelector('#msg_phone');
var users = document.getElementById('users');
var emailArr = [];

myForm.addEventListener('submit', onSubmit);

users.addEventListener('click', remUser);

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
    } else if (phone.value === '') {
        msg_phone.style.color = 'chocolate';
        msg_phone.style.background = 'beige';  
        msg_phone.innerHTML = 'PLease Enter Phone!';
        setTimeout(() => msg_phone.remove(), 3000);
    } else {
        var userObj = {
            name: name.value,
            email: email.value,
            phone: phone.value
        };

        var userObj_serial = JSON.stringify(userObj);
        localStorage.setItem(email.value, userObj_serial);

        var li = document.createElement('li');
        li.className = 'list-group-item';

        li.appendChild(document.createTextNode(`Name - ${userObj.name}, Email - ${userObj.email}, Phone - ${userObj.phone}`));

        var del = document.createElement('button');
        del.className = 'btn btn-danger btn-sm float-right delete';

        del.appendChild(document.createTextNode('X'));

        li.appendChild(del);
        users.appendChild(li);
        emailArr.push(userObj.email);
    }

}

//Deleting the User Data from UL as well as Local Storage

function remUser(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do You Want to Delete This Record?')) {
            var li = e.target.parentElement;
            for (var i = 0; i < emailArr.length; i++) {
                if (li.firstChild.textContent.indexOf(emailArr[i]) != -1) {
                    localStorage.removeItem(emailArr[i]);
                }
            }
            users.removeChild(li);
        }
    }
}


// Buttons Events

// const click = document.querySelector('#click');
// const hover = document.querySelector('#hover');
// const mouseOut = document.querySelector('#mouse-out');

// click.addEventListener('click', (e) => {
//     alert('SURPRISE!!');
// });

// hover.addEventListener('mouseover', (e) => {
//     document.querySelector('body').style.background = '#222';
// });

// mouseOut.addEventListener('mouseout', (e) => {
//     document.querySelector('body').style.background = "#679324";
// });
