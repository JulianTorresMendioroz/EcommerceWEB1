let divCaptcha = document.querySelector(".captcha");

let arrayNumAleatorios = [];

for (let i = 0; i < 3; i++) {
    let random = Math.random();
    random = random * 3 + 1;
    random = parseInt(random);
    arrayNumAleatorios[i] = random; 
}

let captchaView = document.querySelector('.captcha_view');

let arrayString = arrayNumAleatorios.join('');

console.log(arrayString)
captchaView.innerHTML = arrayString;

let inputCaptcha = document.querySelector(".input_captcha");

let buttonCaptchaValid = document.querySelector(".captcha_verificacion");

//Revisar boton para que no se pueda enviar antes el formulario

let buttonEnviar = document.querySelector(".form_button");

buttonEnviar.disabled = true;


function verificarCaptcha (event) {

    if(arrayString === inputCaptcha.value) {

        let pCorrecto = document.createElement("p");
        pCorrecto.classList.add("captcha_correcto");
        pCorrecto.innerHTML = "Captcha correcto";
        divCaptcha.appendChild(pCorrecto);
        buttonCaptchaValid.disabled = true;
       
    
    } else if (arrayString !== inputCaptcha){

        let pIncorrecto = document.createElement("p");
        pIncorrecto.classList.add("captcha_correcto");
        pIncorrecto.innerHTML = "Captcha incorrecto";
        divCaptcha.appendChild(pIncorrecto);

    }

    event.preventDefault();
}

buttonCaptchaValid.addEventListener("click", verificarCaptcha);





// let numerosAleatorios = (Math.random() * 5) + 1;

// console.log(parseInt(numerosAleatorios));




