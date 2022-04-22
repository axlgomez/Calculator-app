
// Adjust the color theme 
// Have their initial theme preference checked and have any additional changes saved in the browser.

const radioChange = () => {
    const checkes = document.querySelector('.theme__input:checked');
    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    const third = document.querySelector('#third');

    if(first == checkes){
        document.body.classList.add("first");
        document.body.classList.remove("third");
        document.body.classList.remove("second");       
        localStorage.setItem('colorScheme', 'first');
    }
    if(second == checkes){
        document.body.classList.add("second");
        document.body.classList.remove("third");
        document.body.classList.remove("first");
        localStorage.setItem('colorScheme', 'second');
    }
    if(third == checkes){
        document.body.classList.add("third");
        document.body.classList.remove("second");
        document.body.classList.remove("first");
        localStorage.setItem('colorScheme', 'third');
    }

}

let inputs = document.querySelectorAll('.theme__input');
inputs.forEach(function(input){
    input.addEventListener('change', radioChange);
    
    const prefersColor = localStorage.getItem('colorScheme');
    switch (prefersColor) {
        case 'first':
            document.body.classList.add("first");
            first.setAttribute("checked", true);
            break;
        case 'second':
            document.body.classList.add("second");
            second.setAttribute("checked", true);
            break;
        case 'third':
            document.body.classList.add("third");
            third.setAttribute("checked", true);
            break;

        default:
            first.setAttribute("checked", true);
            break;
    }
});

// add class to buttons to animate

const btns = document.querySelectorAll(".buttons__button");
btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        btn.classList.add("active");
        setTimeout(() => {
            btn.classList.remove("active");
        }, 400);
    })
});

//Perform mathematical operations like addition, subtraction, multiplication, and division

let newInput = true;
let operand1 = null;
let operand2 = null;
let operation = 0;

//calculator variables

const display = document.querySelector("#display-value");
const reset = document.querySelector("#reset");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");
const operations = [
    "#add", "#subtract", "#divide", "#multiply"
];
const numbers = [
    "#cero", "#uno", "#dos", "#tres", "#cuatro", "#cinco", "#seis", "#siete", "#ocho", "#nueve"
];
const decimal = document.querySelector("#decimal");

const doOperation = (value1, value2, operationNumber) => {
    switch (operationNumber) {
        case 1:
            return Math.round((value1 + value2) * 1000) / 1000;
            break;
        case 2:
            return Math.round((value1 - value2) * 1000) / 1000;
            break;
        case 3:
            return Math.round((value1 / value2) * 1000) / 1000
            break;
        case 4:
            return Math.round((value1 * value2) * 1000) / 1000;
            break; 
        default:
        return;
    };
}

reset.addEventListener("click", ()=>{
    display.textContent= 0;
    newInput = true;
    operand1 = null;
    operand2 = null;
    operation = 0;
});

del.addEventListener("click", ()=>{

    if (display.textContent != "") {
        let digit = display.textContent;
        display.textContent = digit.slice(0, digit.length-1);
    }

    if (display.textContent === "") {
        display.textContent = 0;
        newInput = true;
    }
});

decimal.addEventListener("click", ()=>{
    if (newInput) {
        display.textContent = `0${"."}`;
        newInput = false;
    } 
    else if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }

});

//Adding a function to number keys' event handler

for (let num = 0; num < 10; num++) {
    document.querySelector(numbers[num]).addEventListener("click", ()=>{
        if (newInput || display.textContent == 0 && display.textContent !== `0${"."}`) {
            display.textContent = num;
            newInput = false;
        } else if(display.textContent.length < 11) {
            display.textContent += num;
        }
    });
}

//Adding a function to operation keys' event handler

for (let ope = 0; ope < 4; ope++) {
    document.querySelector(operations[ope]).addEventListener("click", ()=>{
        if (operand1 !== null && !newInput) {
            operand2 = Number(display.textContent);
            operand1 = doOperation(operand1, operand2, operation);
            display.textContent = operand1;
            operation = ope+1
        }else{
            operand1 = Number(display.textContent);
            operation = ope+1
        }
        newInput = true;
    });
}

equal.addEventListener("click", ()=>{
    //if the user wants to repeat the last operation on the result or a new number
    if(operand1 === null)return;
    if (operand1 === null && operand2 !== null) {
        operand1 = Number(display.textContent);
    } else {
        operand2 = Number(display.textContent);
    }

    display.textContent = doOperation(operand1, operand2, operation);

    operand1 = null;
    newInput = true;
});

