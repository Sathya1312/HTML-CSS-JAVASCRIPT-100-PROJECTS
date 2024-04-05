let images = document.querySelectorAll('img');
let wrapper = document.getElementById('wrapper');
let imgWrapper = document.getElementById('fullImg');
let close = document.querySelector('span');

images.forEach((image, index) => {
    image.addEventListener("click",()=>{
        openModal(`images/img${index}.jpg`)
    })
})

close.addEventListener("click", ()=>(wrapper.style.display="none"));

function openModal(pic){
    wrapper.style.display="flex";
    imgWrapper.src = pic;
}