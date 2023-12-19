"use strict";
var head = 10;
var text = '';
var space = new Array(head * 2);
space.fill(' ');
var sSpace = space.join('');
var symb = 1;
var counter = 1;
console.debug('🚀 ~ Rows:', head);
var newSpace = '';
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
//# sourceMappingURL=index.js.map