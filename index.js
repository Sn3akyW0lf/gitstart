
//Form Fuctionality

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const msg_user = document.querySelector('#msg_user');
const msg_email = document.querySelector('#msg_email');
const msg_phone = document.querySelector('#msg_phone');
const tblUser = document.querySelector('#tblUsers');
// var users = document.getElementById('users');
var userList = [];

myForm.addEventListener('submit', onSubmit);

// users.addEventListener('click', remUser);
tblUser.addEventListener('click', editUser);


// Get Pervious User Data present in CrudCrud database on Page Load.

window.addEventListener('DOMContentLoaded',() => {
    axios
        .get('http://localhost:4000/user/all-users')
        .then(response => {
            // console.log(response.data);
            response.data.allUserDetails.forEach(res => {
                // console.log(res);
                // var li = document.createElement('li');
                // li.className = 'list-group-item';
                // var uid = document.createElement('input');
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                var td5 = document.createElement('td');
                // uid.setAttribute("type", "hidden");
                // uid.setAttribute("value", res.id);

                td1.appendChild(document.createTextNode(`${res.id}`))
                td1.className = "d-none";
                td2.appendChild(document.createTextNode(`${res.name}`))
                td3.appendChild(document.createTextNode(`${res.email}`))
                td4.appendChild(document.createTextNode(`${res.phone}`))
                
                // li.appendChild(document.createTextNode(`Name - ${res.name}, Email - ${res.email}, Phone - ${res.phone}`));

                var del = document.createElement('button');
                var edit = document.createElement('button');
                del.className = 'btn btn-danger btn-sm float-right delete';
                edit.className = 'btn btn-info btn-sm float-right edit';

                del.appendChild(document.createTextNode('X'));
                edit.appendChild(document.createTextNode('Edit'));

                del.addEventListener('click', function(){ deleteUser(td1); });

                // li.appendChild(uid);
                // li.appendChild(del);
                // li.appendChild(edit);
                td5.appendChild(del);
                td5.appendChild(edit);
                // users.appendChild(li);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tblUser.appendChild(tr);
                
                var userObj = {
                    name: res.name,
                    email: res.email,
                    phone: res.phone,
                    id: res.id
                };

                userList.push(userObj);
                // console.log(li.inner);
            })
            console.log(userList);
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
            .post('http://localhost:4000/user/add-user', userObj)
            .then((res) => {
                // var li = document.createElement('li');
                // li.className = 'list-group-item';
                // var uid = document.createElement('input');
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                var td5 = document.createElement('td');
                // uid.setAttribute("type", "hidden");
                // uid.setAttribute("value", res.data.newUserDetail.id);

                td1.appendChild(document.createTextNode(`${res.data.newUserDetail.id}`))
                td1.className = "d-none";
                td2.appendChild(document.createTextNode(`${res.data.newUserDetail.name}`))
                td3.appendChild(document.createTextNode(`${res.data.newUserDetail.email}`))
                td4.appendChild(document.createTextNode(`${res.data.newUserDetail.phone}`))
                
                // li.appendChild(document.createTextNode(`Name - ${res.name}, Email - ${res.email}, Phone - ${res.phone}`));

                var del = document.createElement('button');
                var edit = document.createElement('button');
                del.className = 'btn btn-danger btn-sm float-right delete';
                edit.className = 'btn btn-info btn-sm float-right edit';

                del.appendChild(document.createTextNode('X'));
                edit.appendChild(document.createTextNode('Edit'));

                del.addEventListener('click', function(){ deleteUser(td1); });

                // li.appendChild(uid);
                // li.appendChild(del);
                // li.appendChild(edit);
                td5.appendChild(del);
                td5.appendChild(edit);
                // users.appendChild(li);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tblUser.appendChild(tr);
                
                var userObj = {
                    name: res.data.newUserDetail.name,
                    email: res.data.newUserDetail.email,
                    phone: res.data.newUserDetail.phone,
                    id: res.data.newUserDetail.id
                };

                userList.push(userObj);
                name.value = '';
                email.value = '';
                phone.value = '';
                userObj.id = res.data.newUserDetail.id;
                // console.log(res.data.newUserDetail);
                console.log(userList)
            })
            .catch(err => console.log(err))

    }

}

//Deleting the User Data from UL as well as Cloud Storage
function deleteUser(id){
    console.log(id.innerHTML);
    let tr = id.parentElement;
    let tbl = tr.parentElement;
    let user = userList.find(u => u.id == id.innerHTML);

    // console.log(tr.parentElement);

    // console.log(user);
    // console.log(userList[(id.innerHTML - 1)]);
    axios
        .post('http://localhost:4000/user/delete-user', user)
        .then(res => {
            console.log(res);
            tbl.removeChild(tr);
        })
        .catch(err => {
            console.log(err);
        })
}


// function remUser(e) {
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Do You Want to Delete This Record?')) {
//             var li = e.target.parentElement;
//             for (var i = 0; i < userList.length; i++) {
//                 if (li.firstChild.textContent.indexOf(userList[i].email) != -1) {
//                     axios
//                         .delete(`https://crudcrud.com/api/72713e8bf3f34c70ad61054ff478c8e9/appointmentData/${userList[i].id}`)
//                         .then(res => {
//                             console.log(res.data);
//                             console.log(li.firstChild.textContent)
//                         })
//                         .catch(err => console.log(err))
//                 }
//             }
//             users.removeChild(li);
//         }
//     }
// }


//Editing User Information after Registration

function editUser(e) {
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        for (var i = 0; i < userList.length; i++) {
            if (li.firstChild.textContent.indexOf(userList[i].email) != -1) {
                axios
                    .get(`https://crudcrud.com/api/72713e8bf3f34c70ad61054ff478c8e9/appointmentData/${userList[i].id}`)
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
