let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols= document.getElementById("symbols");
let genPass= document.getElementById("genPass");


// showing input slider value
sliderValue.textContent = inputSlider.value; //looks at the slider and its current value
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});


genPass.addEventListener('click', () => {
    passBox.value = generatePassword();
})


function generatePassword() {
    let genPassword = "";

    genPassword = Math.random();  
    return genPassword;

}

