
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
