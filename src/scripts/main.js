
const radioChange = () => {
    const checkes = document.querySelector('.theme__input:checked');
    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    const third = document.querySelector('#third');

    if(first == checkes){
        document.body.classList.add("first");
        document.body.classList.remove("third");
        document.body.classList.remove("second");       
        localStorage.setItem('changeColor', 'first');
    }
    if(second == checkes){
        document.body.classList.add("second");
        document.body.classList.remove("third");
        document.body.classList.remove("first");
        localStorage.setItem('changeColor', 'second');
    }
    if(third == checkes){
        document.body.classList.add("third");
        document.body.classList.remove("second");
        document.body.classList.remove("first");
        localStorage.setItem('changeColor', 'third');
    }

}


let inputs = document.querySelectorAll('.theme__input');
inputs.forEach(function(input){
    input.addEventListener('change', radioChange);
    const color = localStorage.getItem('changeColor');

    if(color === 'first'){
        document.body.classList.add("first");
    }
    if(color === 'second'){
        document.body.classList.add("second");
    }
    if(color === 'third'){
        document.body.classList.add("third");
    }
});


