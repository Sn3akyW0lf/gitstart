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

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

console.log(headerTitle);

// headerTitle.textContent='Hello';
// headerTitle.innerText="Goodbye";

// headerTitle.innerHTML = '<h3> Hello </h3>';

// headerTitle.style.borderBottom = 'solid 3px black';
header.style.borderBottom = 'solid 3px black';


var add_items = document.querySelector('h2');

add_items.style.fontWeight = 'bold';
add_items.style.color = 'green';


//Get Elements by Class Name

var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[1]);

// items[0].textContent = 'Hello 0';
// items[1].textContent = 'Hello 1';
// items[2].textContent = 'Hello 2';
// items[3].textContent = 'Hello 3';
// items[2].style.backgroundColor = 'green';

for(var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
}


//Get Element by Tag Name

var li = document.getElementsByTagName('li');

console.log(li);
console.log(li[1]);

li[0].textContent = 'Hello 0';
li[1].textContent = 'Hello 1';
li[2].textContent = 'Hello 2';
li[3].textContent = 'Hello 3';
// li[2].style.backgroundColor = 'green';

for(var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#eee';
}


