
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            accordian.classList.remove('active');
            answer.style.maxHeight = null;

        } else {
            icon.classList.add('active');
            accordian.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        
    })
})
    