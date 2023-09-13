//Examinee the Document Object

// console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.all);
console.log(document.all[10]);

document.all[10].textContent = 'Hello';
