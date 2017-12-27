# math-expression
### Easy, safe, resource-friendly
Accepts: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "(", ")", "+", "-", "/", "*"]

```js
const mathexpression = require("math-expression");

console.log(mathexpression("(3485+1984)/1823")); // returns 3 (as int)
console.log(mathexpression("383147+342947*9/(56+13-(4-4))")); // returns 427879.2173913043 (as int)
```
