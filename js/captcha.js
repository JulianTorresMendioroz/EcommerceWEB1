//CAPTCHA

let divCaptcha = document.querySelector(".captcha");

let captchaDigitos = "";

let resultadoAleatorio = Math.floor((Math.random() * 1000) + 100);

captchaDigitos = resultadoAleatorio.toString();

let captchaView = document.querySelector('.captcha_view'); 

captchaView.innerHTML = captchaDigitos;

let buttonCaptchaValid = document.querySelector(".captcha_verificacion");

let longitud = captchaDigitos.length;

let inputCaptcha = document.querySelector(".input_captcha"); 

inputCaptcha.maxLength=`${longitud}`;

function verificarCaptcha (event) {

    if(captchaDigitos === inputCaptcha.value) {
        
        let pCorrecto = document.querySelector("#captcha_result")
        pCorrecto.classList.add("captcha_correcto_text");
        pCorrecto.innerHTML = "Formulario aceptado, datos enviados correctamente ";
        inputCaptcha.classList.add("captcha_correcto")
        buttonCaptchaValid.classList.add("captcha_correcto");
    
    } else if (captchaDigitos !== inputCaptcha.value){

        let pIncorrecto = document.querySelector("#captcha_result");
        pIncorrecto.classList.add("captcha_error_text");
        pIncorrecto.innerHTML = "Captcha incorrecto, valide el captcha correctamente";
        inputCaptcha.classList.add("captcha_error")
        
    }

    event.preventDefault();
}

buttonCaptchaValid.addEventListener("click", verificarCaptcha);
