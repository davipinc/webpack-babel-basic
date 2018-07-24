import message from './message';

const app = {};

app.doubled = (x) => x * 2;

console.log('2x2', app.doubled(2));

const paragraph = document.createElement('p');
paragraph.innerHTML = message;

document.body.prepend(paragraph);