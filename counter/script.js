let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button){

    button.addEventListener('click', function(e) {

        const clicked = e.currentTarget.classList;

        if (clicked.contains("decrease")){
            count--;
            value.style.color = 'red'
        }

        else if (clicked.contains("increase")) {
            count++;
            value.style.color = 'green'
        }

        else{
            count=0;
            value.style.color = 'black'
        }

        value.textContent = count;
    })

    button.addEventListener('mouseover', function(e) {

        button.classList.add('scale-up'); 

        if (e.target.classList.contains("decrease")){
            button.style.backgroundColor = 'rgba(237, 58, 58, 0.895';
        }

        else if (e.target.classList.contains("increase")){
            button.style.backgroundColor = ' rgba(70, 232, 20, 0.895)';
        }

        else{
            button.style.backgroundColor = '  rgba(255, 230, 0, 0.895)'; 
        }
    })

    button.addEventListener('mouseout', function(e) {
        button.classList.remove('scale-up'); 
        button.style.backgroundColor = '';
    })

})
