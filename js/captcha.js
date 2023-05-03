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
        let pCorrecto = document.querySelector("#captcha_result")
        pCorrecto.classList.add("captcha_correcto_text");
        pCorrecto.innerHTML = "Captcha correcto";
        inputCaptcha.classList.add("captcha_correcto")
        buttonCaptchaValid.disabled = true;
    
    } else if (arrayString !== inputCaptcha){

        let pIncorrecto = document.querySelector("#captcha_result")
        pIncorrecto.classList.add("captcha_error_text");
        pIncorrecto.innerHTML = "Captcha incorrecto";
        inputCaptcha.classList.add("captcha_error")
    }

    event.preventDefault();
}

buttonCaptchaValid.addEventListener("click", verificarCaptcha);





// let numerosAleatorios = (Math.random() * 5) + 1;

// console.log(parseInt(numerosAleatorios));




