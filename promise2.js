console.log('Person1: Shows Ticket');
console.log('Person2: Shows Ticket');


// //Using normal Promises / then
// const promiseWifeBringsTickets = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Ticket');
//     }, 3000);
// });

// const getPopcorn = promiseWifeBringsTickets.then((t) => {
//     console.log('Wife: I have the Tickets.');
//     console.log('Husband: We should go in.');
//     console.log('Wife: NO, I am Hungry.');
//     return new Promise((res, rej) => {
//         res(`${t} Popcorn`);
//     });
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('Husband: I got the Popcorn.');
//     console.log('Husband: We should go in.');
//     console.log('Wife: NO, I need Butter on my Popcorn.');
//     return new Promise((res, rej) => {
//         res(`${t} Butter`);
//     });
// });

// const getDrinks = getButter.then((t) => {
//     console.log(`Husband: I got some Butter.`);
//     console.log('Husband: Now, can we go in?');
//     console.log('Wife: How about some Cold Drinks?');
//     return new Promise((res, rej) => res(`${t} Drinks`));
// });

// getDrinks.then((t) => console.log(t));

//Using async / await

const preMovie = async () => {
    const promiseWifeBringsTickets = new Promise((res, rej) => {
        setTimeout(() => {
            res('Tickets')
        }, 3000);
    });

    const getPopcorn = new Promise((res, rej) => res('Popcorn'));

    const addButter = new Promise((res, rej) => res('Butter'));

    const getColdDrinks = new Promise((res, rej) => res('Cold Drinks'));

    let ticket = await promiseWifeBringsTickets;
    
    console.log(`Wife: I have the ${ticket}.`);
    console.log('Husband: We should go in.');
    console.log('Wife: NO, I am Hungry.');

    let popcorn = await getPopcorn;

    console.log(`Husband: I got the ${popcorn}.`);
    console.log('Husband: We should go in.');
    console.log('Wife: NO, I need Butter on my Popcorn.');

    let butter = await addButter;

    console.log(`Husband: I got the ${butter}.`);
    console.log('Husband: Now, can we go in?');
    console.log('Wife: How about some Cold Drinks?'); 
    
    let coldDrinks = await getColdDrinks;

    console.log(`Husband: I got the ${coldDrinks}.`);
    console.log('Husband: Anything else, My Lady?');
    console.log('Wife: Lets go, we are getting late!');
    console.log('Husband: Thank you for the reminder *Grins*');

    return ticket;
}

preMovie().then((x) => console.log(`Person3: Husband  Shows ${x}`));

console.log('Person4: Shows Ticket');
console.log('Person5: Shows Ticket'); 