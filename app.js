//const slider = document.querySelector('#slider');
const slider = document.getElementById('slider');
const canvas = document.getElementById('canvas');

slider.addEventListener('input', handleInputSlider);
const ctx = canvas.getContext('2d');
const images = [];

window.addEventListener('load', pageLoaded);
function pageLoaded(){
    for(let i=1; i<=36; i++){
        const number = i.toString().padStart(2, '00'); //padStart sirve para los strings - se pasa como parámetros la cantidad de dígitos y un string para rellenar desde la izquierda;
        const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`;
        const image = new Image();
        image.src = url; 
        image.addEventListener('load', () => {
            images[i] = image;
            if(i === 1){
                loadImage(i);
            }
        })
    }
}

function loadImage(index){
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

function handleInputSlider(){
    console.log(this.value);
    loadImage(this.value);
}
console.log(slider);