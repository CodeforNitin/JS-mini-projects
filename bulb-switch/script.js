    const btns = document.querySelectorAll('.btn');
    const image = document.querySelector('#image')

    let isOn = false;

    btns.forEach(function(button){

        button.addEventListener('click', function(e){
            if (e.currentTarget.classList.contains('on') && isOn == false){
                document.body.style.backgroundColor = "azure";
                image.src="images/bulb-on.png";
                image.classList.toggle("img-off");
                image.classList.toggle("img-on");
                isOn=true;
            }

            else if (e.currentTarget.classList.contains('off') && isOn == true) {
                document.body.style.backgroundColor = "black";
                image.src = "images/bulb-off.png";
                image.classList.toggle("img-off");
                image.classList.toggle("img-on");
                isOn=false;
            }
        });
    });