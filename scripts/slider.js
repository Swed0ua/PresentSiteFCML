let slider = document.getElementsByClassName('slide');
let marginLef = 0;
let timeStop = (slider.length-1) * 100;
let nextSlide = 100;

function nextSlide1(id) {
    nextSlide = 100 * id;
    sliderGear();
}

function sliderGear(){
    marginLef = marginLef - nextSlide;
    slider[0].style.marginLeft = marginLef + '%';
    
    if (marginLef == - timeStop){
        marginLef = +100;
    }
}

setInterval(sliderGear, 10000);

