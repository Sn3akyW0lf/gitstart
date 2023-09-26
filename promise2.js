console.log('Person1: Shows Ticket');
console.log('Person2: Shows Ticket');

const promiseWifeBringsTickets = new Promise((res, rej) => {
    setTimeout(() => {
        res('Ticket');
    }, 3000);
});

const getPopcorn = promiseWifeBringsTickets.then((t) => {
    console.log('Wife: I have the Tickets.');
    console.log('Husband: We should go in.');
    console.log('Wife: NO, I am Hungry.');
    return new Promise((res, rej) => {
        res(`${t} Popcorn`);
    });
});

const getButter = getPopcorn.then((t) => {
    console.log('Husband: I got the Popcorn.');
    console.log('Husband: We should go in.');
    console.log('Wife: NO, I need Butter on my Popcorn.');
    return new Promise((res, rej) => {
        res(`${t} Butter`);
    });
});

getButter.then((t) => console.log(t));
console.log('Person4: Shows Ticket');
console.log('Person5 : Shows Ticket');