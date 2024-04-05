//copy text
const copyText = document.querySelector('textarea[name=copyTxt]');
//final text
const finalText = document.querySelector('textarea[name=finalTxt]');
//move btn
const moveBtn = document.querySelector('.moveBtn');
//copy btn
const copyBtn = document.querySelector('.copyBtn');
//output
const output = document.querySelector('.output');

copyText.addEventListener("click", () => this.select());
finalText.addEventListener("click", () => this.select());

copyBtn.addEventListener("click", ()=>{
    let temp = copyText.value;
    copyToClipBoard(temp);
})

moveBtn.addEventListener("click", ()=>{
    let temp = copyText.value;
    finalText.value = temp;
})

function copyToClipBoard(str){
    const outputContainer = document.querySelector('.output-container');
    const textarea = document.createElement("textarea");
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    outputContainer.removeChild(textarea);
    output.innerHTML = `<h3>Content Copied</h3>`
    output.classList.add("added");
    setTimeout(()=>{
        output.classList.toggle('added');
        output.textContent='';
    },2000);
}