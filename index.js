
//Form Fuctionality

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const msg_user = document.querySelector('#msg_user');
const msg_email = document.querySelector('#msg_email');
const msg_phone = document.querySelector('#msg_phone');
var users = document.getElementById('users');
var userList = [];

myForm.addEventListener('submit', onSubmit);

users.addEventListener('click', remUser);
users.addEventListener('click', editUser);


// Get Pervious User Data present in CrudCrud database on Page Load.

window.addEventListener('DOMContentLoaded',() => {
    axios
        .get('https://crudcrud.com/api/45598a7c63a44ae284f4045a530a5c89/appointmentData')
        .then(response => {
            response.data.forEach(res => {
                var li = document.createElement('li');
                li.className = 'list-group-item';
                var uid = document.createElement('input');
                uid.setAttribute("type", "hidden");
                uid.setAttribute("value", res._id)

                li.appendChild(document.createTextNode(`Name - ${res.name}, Email - ${res.email}, Phone - ${res.phone}`));

                var del = document.createElement('button');
                var edit = document.createElement('button');
                del.className = 'btn btn-danger btn-sm float-right delete';
                edit.className = 'btn btn-info btn-sm float-right edit';

                del.appendChild(document.createTextNode('X'));
                edit.appendChild(document.createTextNode('Edit'));

                li.appendChild(uid);
                li.appendChild(del);
                li.appendChild(edit);
                users.appendChild(li);
                
                var userObj = {
                    name: res.name,
                    email: res.email,
                    phone: res.phone,
                    id: res._id
                };

                userList.push(userObj);
                // console.log(li.inner);
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
            .post('https://crudcrud.com/api/45598a7c63a44ae284f4045a530a5c89/appointmentData', userObj)
            .then((res) => {
                var li = document.createElement('li');
                li.className = 'list-group-item';
                var uid = document.createElement('input');
                uid.setAttribute("type", "hidden");
                uid.setAttribute("value", res._id)

                li.appendChild(document.createTextNode(`Name - ${userObj.name}, Email - ${userObj.email}, Phone - ${userObj.phone}`));

                var del = document.createElement('button');
                var edit = document.createElement('button');
                del.className = 'btn btn-danger btn-sm float-right delete';
                edit.className = 'btn btn-info btn-sm float-right edit';

                del.appendChild(document.createTextNode('X'));
                edit.appendChild(document.createTextNode('Edit'));

                li.appendChild(uid);
                li.appendChild(del);
                li.appendChild(edit);
                users.appendChild(li);
                userList.push(userObj);
                name.value = '';
                email.value = '';
                phone.value = '';
                userObj.id = res.data._id;
                console.log(res.data);
                console.log(userList)
            })
            .catch(err => console.log(err))

    }

}

//Deleting the User Data from UL as well as Cloud Storage

function remUser(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do You Want to Delete This Record?')) {
            var li = e.target.parentElement;
            for (var i = 0; i < userList.length; i++) {
                if (li.firstChild.textContent.indexOf(userList[i].email) != -1) {
                    axios
                        .delete(`https://crudcrud.com/api/45598a7c63a44ae284f4045a530a5c89/appointmentData/${userList[i].id}`)
                        .then(res => {
                            console.log(res.data);
                            console.log(li.firstChild.textContent)
                        })
                        .catch(err => console.log(err))
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
        for (var i = 0; i < userList.length; i++) {
            if (li.firstChild.textContent.indexOf(userList[i].email) != -1) {
                axios
                    .get(`https://crudcrud.com/api/45598a7c63a44ae284f4045a530a5c89/appointmentData/${userList[i].id}`)
                    .then(res => {
                        name.value = res.data.name;
                        email.value = res.data.email;
                        phone.value = res.data.phone;
                        // axios
                        // .delete(`https://crudcrud.com/api/b8ac3d0148304dbaa42272418e765ef2/appointmentData/${res._id}`)
                        // .then(res => console.log(res))
                        // .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }
        }
        // users.removeChild(li);
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
