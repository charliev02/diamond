const head = 10;

let text = '';
const space = new Array(head * 2);
space.fill(' ');
const sSpace = space.join('');

let symb = 1;
let counter = 1;
console.debug('🚀 ~ Rows:', head);
let newSpace = '';
while (counter <= head * 2) {
  if (symb % 2 !== 0) {
    if (counter <= head) {
      newSpace = sSpace.slice(counter);
      text = text + '*';
      console.debug(newSpace + text);
      text = text + '*';
      if (counter === head) {
        text = text.slice(2);
      }
    }
    if (counter > head) {
      text = text.slice(1);
      console.debug(newSpace, text);

      text = text.slice(1);
      newSpace = newSpace + ' ';
    }
    counter++;
  }

  symb++;
}
