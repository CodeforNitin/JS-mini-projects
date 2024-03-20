const btns = document.querySelectorAll('.btn');
const image = document.querySelector('#image')

btns.forEach(function(button){

    button.addEventListener('click', function(e){
        if (e.currentTarget.classList.contains('on')){
            document.body.style.backgroundColor = "azure";
            image.src="images/bulb-on.png";
            image.classList.toggle("img-off");
            image.classList.toggle("img-on");

        }

        else{
            document.body.style.backgroundColor = "black";
            image.src = "images/bulb-off.png";
            image.classList.toggle("img-off");
            image.classList.toggle("img-on");
        }
    });
});