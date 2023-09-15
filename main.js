//Examinee the Document Object

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);

// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);

//Get element by ID

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);

// headerTitle.textContent='Hello';
// headerTitle.innerText="Goodbye";

// headerTitle.innerHTML = '<h3> Hello </h3>';

// headerTitle.style.borderBottom = 'solid 3px black';
// header.style.borderBottom = 'solid 3px black';


// var add_items = document.querySelector('h2');



// add_items.style.fontWeight = 'bold';
// add_items.style.color = 'green';


//Get Elements by Class Name

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]);

// items[0].textContent = 'Hello 0';
// items[1].textContent = 'Hello 1';
// items[2].textContent = 'Hello 2';
// items[3].textContent = 'Hello 3';
// items[2].style.backgroundColor = 'green';

// for(var i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }


//Get Element by Tag Name

// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// li[0].textContent = 'Hello 0';
// li[1].textContent = 'Hello 1';
// li[2].textContent = 'Hello 2';
// li[3].textContent = 'Hello 3';
// // li[2].style.backgroundColor = 'green';

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#eee';
// }

//Query Selector

// var secItem = document.querySelector('.list-group-item:nth-child(2)');
// secItem.style.color = 'green';

// var thItem = document.querySelector('.list-group-item:nth-child(3)');
// thItem.style.display = 'none'; 

//Query Selector All

// var list_items = document.querySelectorAll('li');
// list_items[1].style.color = '#00ff00';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }


// // TRAVERSING THE DOC OBJ MODEL

// var item_list = document.querySelector('#items');

// //parentNode
// console.log(item_list.parentNode);

// item_list.parentNode.style.backgroundColor = '#555';

// // console.log(item_list.parentNode.parentNode);

// //parentElement
// console.log(item_list.parentElement);

// item_list.parentElement.style.backgroundColor = '#777';

// //childNodes
// // console.log(item_list.childNodes);

// // console.log(item_list.children)

// console.log(item_list.children[1]);
// item_list.children[1].style.backgroundColor = '#550';

// //firstChild

// console.log(item_list.firstChild);

// //firstElementChild

// console.log(item_list.firstElementChild);
// // item_list.firstElementChild.textContent = 'Hello 0';

// //lastChild

// console.log(item_list.lastChild);

// //lastElementChild

// console.log(item_list.lastElementChild);
// item_list.lastElementChild.textContent = 'Hello 4';

// //nextSiblings

// console.log(item_list.nextSibling);

//nextElementSibling

// console.log(item_list.nextElementSibling);


//previousSibling

// console.log(item_list.previousSibling);

//previousElementSibling

// console.log(item_list.previousElementSibling);

// item_list.previousElementSibling.style.color = '#172590';

//createElement

//create a div

// var newDiv = document.createElement('div');

//adding new class
// newDiv.className = 'hello';

//adding id

//addAttr
// newDiv.setAttribute('title', 'Im a Div');

// console.log(newDiv);

//create text node

// var newDivText = document.createTextNode('Hello World !! :)');

//add text to div

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '15px';

// container.insertBefore(newDiv, h1);


// var newDiv2 = document.createElement('div');
// newDiv2.className = 'hello';
// newDiv2.setAttribute('title', 'Im a Div2');

// var newDiv2Text = document.createTextNode('Hello World !! :)');
// newDiv2.appendChild(newDiv2Text);

// var ul = document.querySelector('ul');
// var li = document.querySelector('li');


// ul.insertBefore(newDiv2, li);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event

form.addEventListener('submit', addItem);

//Delete event

itemList.addEventListener('click', remItem);

function addItem(e) {
    e.preventDefault();

    //Get Input VAlue

    var newItem = document.getElementById('item').value;

    //Create new li element

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var del = document.createElement('button');
    var edit = document.createElement('button');

    del.className = 'btn btn-danger btn-sm float-right delete';
    edit.className = 'btn btn-info btn-sm float-right edit';

    del.appendChild(document.createTextNode('X'));
    edit.appendChild(document.createTextNode('Edit'));

    li.appendChild(del);
    li.appendChild(edit);
    itemList.appendChild(li);
}

//Remove Item

function remItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do You Want to Delete this Item?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}