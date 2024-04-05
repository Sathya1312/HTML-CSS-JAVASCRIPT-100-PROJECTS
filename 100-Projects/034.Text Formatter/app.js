const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const buttons = document.querySelectorAll('button');

inputField.addEventListener('keyup', () => outputField.innerHTML = inputField.value);

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        if(button.classList.contains("uppercase")){
            outputField.innerHTML = outputField.innerHTML.toUpperCase();
        }else if(button.classList.contains("lowercase")){
            outputField.innerHTML = outputField.innerHTML.toLowerCase();
        }else if(button.classList.contains("capitalize")){
            outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase();
        }else if(button.classList.contains("bold")){
            outputField.style.fontWeight = "600";
        }else if(button.classList.contains("italic")){
            outputField.style.fontStyle = "italic";
        }else if(button.classList.contains("underline")){
            outputField.style.textDecoration = "underline";
        }
    })
})
