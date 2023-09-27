
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
users.addEventListener('click', editUser);


// Get Pervious User Data present in CrudCrud database on Page Load.

window.addEventListener('DOMContentLoaded',() => {
    axios
        .get('https://crudcrud.com/api/328a7de9a1154ca0a9a3ac5298344f31/appointmentData')
        .then(response => {
            response.data.forEach(res => {
                var li = document.createElement('li');
                li.className = 'list-group-item';

                li.appendChild(document.createTextNode(`Name - ${res.name}, Email - ${res.email}, Phone - ${res.phone}`));

                var del = document.createElement('button');
                var edit = document.createElement('button');
                del.className = 'btn btn-danger btn-sm float-right delete';
                edit.className = 'btn btn-info btn-sm float-right edit';

                del.appendChild(document.createTextNode('X'));
                edit.appendChild(document.createTextNode('Edit'));

                li.appendChild(del);
                li.appendChild(edit);
                users.appendChild(li);
            })
        })
})

// Validate Textfields and if all data is filled, send the data to CrudCrud database, and add a new
// List Item on the Current Page

function onSubmit(e) {
    e.preventDefault();

    if (name.value === '') {
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

        // var userObj_serial = JSON.stringify(userObj);
        // localStorage.setItem(email.value, userObj_serial);
        axios
            .post('https://crudcrud.com/api/328a7de9a1154ca0a9a3ac5298344f31/appointmentData', userObj)
            .then((res) => {
                var li = document.createElement('li');
                li.className = 'list-group-item';

                li.appendChild(document.createTextNode(`Name - ${userObj.name}, Email - ${userObj.email}, Phone - ${userObj.phone}`));

                var del = document.createElement('button');
                var edit = document.createElement('button');
                del.className = 'btn btn-danger btn-sm float-right delete';
                edit.className = 'btn btn-info btn-sm float-right edit';

                del.appendChild(document.createTextNode('X'));
                edit.appendChild(document.createTextNode('Edit'));

                li.appendChild(del);
                li.appendChild(edit);
                users.appendChild(li);
                emailArr.push(userObj.email);
                name.value = '';
                email.value = '';
                phone.value = '';
                console.log(res.data);
            })
            .catch(err => console.log(err))

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


//Editing User Information after Registration

function editUser(e) {
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        for (var i = 0; i < emailArr.length; i++) {
            if (li.firstChild.textContent.indexOf(emailArr[i]) != -1) {
                user_deserial = JSON.parse(localStorage.getItem(emailArr[i]));
                name.value = user_deserial.name;
                email.value = user_deserial.email;
                phone.value = user_deserial.phone;
                localStorage.removeItem(emailArr[i]);
            }
        }
        users.removeChild(li);
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
