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

var items = document.querySelector('h2');

items.style.fontWeight = 'bold';
items.style.color = 'green';
