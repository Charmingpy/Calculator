const operator= prompt('Enter operator( either +,-,* or /):');

const number1 = parseFloat( prompt('Enter first number: '));
const number2 = parseFloat( prompt('Enter second number: '));

let result; 

switch(operator) {

    case '+':
            result = number1 + number2;
            break;
    case '-':
            result = number1 - number2;
            break;
    case '*':
            result = number1 * number2;
            break;
    case '/':
            result = number1 / number2;
            break;
}

console.log(`${number1} ${number2} ${number3} = ${result} `);