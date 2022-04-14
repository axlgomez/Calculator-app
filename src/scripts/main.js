
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

//Perform mathematical operations like addition, subtraction, multiplication, and division

class Calculator {
    constructor(topValue, bottomValue){
        this.topValue = topValue;
        this.bottomValue = bottomValue;
        this.currentValue = 0;
        this.preValue = "";
        this.typeOperation = undefined;
    }

    writeNumber(number){
        if( number === '.' && this.currentValue.includes('.'))return;
        if(this.currentValue === 0 || this.currentValue === this.preValue){
            this.currentValue = number.toString();
        } else {
            this.currentValue = this.currentValue.toString() + number.toString();
        }
        this.printNumber();
    }

    writeOperation(typeOperation){

        if (this.currentValue === "") return;
        if (this.preValue !== '') {
            this.calculate();
        }
        this.typeOperation = typeOperation;
        this.preValue += this.currentValue;
        this.currentValue = this.preValue;
        this.printNumber();
    }

    deleteLastNumber(){
        this.currentValue = this.currentValue.toString().slice(0,-1);

        if(this.currentValue === ""){
            this.currentValue = 0;
        }
        this.printNumber();
    }

    deleteAll(){
        this.currentValue = 0;
        this.preValue = '';
        this.typeOperation = undefined;
        this.printNumber();
    }

    calculate(){
        let computation;
        let pre = parseFloat(this.preValue);
        let current = parseFloat(this.currentValue);
        if(isNaN(pre) || isNaN(current)) return;
        switch (this.typeOperation) {
            case '+' :
                computation = pre + current
                break;
            case '-' : 
                computation = pre - current
                break;
            case 'x' : 
                computation = pre * current
                break
            case '/' : 
                computation = pre / current
                break
            default:
                return;
        }
        this.currentValue = computation;
        this.typeOperation = undefined;
        this.preValue = '';
        this.printNumber();
    }

    printNumber(){
        this.bottomValue.textContent = this.currentValue;
        this.topValue.textContent = this.preValue;
    }
}

const topValue = document.querySelector("#previus-value");
const bottomValue = document.querySelector("#current-value");
const numbers = document.querySelectorAll("[data-number]");
const operands = document.querySelectorAll("[data-operator]");
const del = document.querySelector("[data-del]");
const reset = document.querySelector("[data-reset]");
const equal = document.querySelector("[data-equal]");

const calculator = new Calculator(topValue, bottomValue)

numbers.forEach(num => {
    num.addEventListener("click", ()=>{
        calculator.writeNumber(num.innerText);
    });
})

operands.forEach(operation => {
    operation.addEventListener("click", ()=>{
        calculator.writeOperation(operation.innerText);
    });
})

del.addEventListener("click", ()=>{
    calculator.deleteLastNumber();
});

reset.addEventListener("click", ()=>{
    calculator.deleteAll();
});

equal.addEventListener("click", ()=>{
    calculator.calculate();
});