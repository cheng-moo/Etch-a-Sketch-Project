//Set Default Values
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
//container
const container = document.createElement('div');
container.className='container';
document.body.appendChild(container);
//Saving the mouseDown state in a variable and it would never change until mouse up
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//square divs
for(let i = 0; i < currentSize * currentSize; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className='square';
    let height = 30;
    let width = height;
    while (currentSize * currentSize * height * width > 160000) {
        height--;
        width = height;
    }
    while (currentSize * currentSize * height * width < 160000) {
        height++;
        width = height;
    }
    squareDiv.style.height = `${height}px`;
    console.log(squareDiv.style.height);
    squareDiv.style.width = `${width}px`;
    container.appendChild(squareDiv);
}
//defining the squareDiv for the global scope
const squareDivs = document.querySelectorAll('.square');
//Hover State

squareDivs.forEach(squareDiv => {
    squareDiv.addEventListener('mouseenter', hover);
    squareDiv.addEventListener('mouseleave', hoverEnd)
 //Color The Squares
 //both mousedown and mouseover use draw function but it'll only work if both mouseover and mouseDown var is true
    squareDiv.addEventListener('mousedown', draw);
    squareDiv.addEventListener('mouseover', draw);
   
})
function hover (e) {

    e.target.classList.add ('hover-color');
}
function hoverEnd (e) {
    
    e.target.classList.remove ('hover-color');
}
function draw(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'rainbow') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    } else if (currentMode === 'color') {
    e.target.style.backgroundColor= colorPallete.value;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    }
    console.log(colorPallete.value);
}
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);
function clear () {
    container.textContent='';
    let dimensionXY = prompt('What is Your Canvas Dimensions? (e.g  10)', '10');
    if (dimensionXY > 100) {
        alert('Maximum 100 squares');
    } else {
        
        for (let i = 0; i < dimensionXY * dimensionXY; i++) {
            const squareDiv = document.createElement('div');
            squareDiv.className='square';
            let height = 30;
            let width = height;
            while (dimensionXY * dimensionXY * height * width > 160000) {
                height--;
                width = height;
            }
            while (dimensionXY * dimensionXY * height * width < 160000) {
                height++;
                width = height;
            }
            squareDiv.style.height = `${height}px`;
            console.log(squareDiv.style.height);
            squareDiv.style.width = `${width}px`;
            
            container.appendChild(squareDiv);
        }
    container.style.gridTemplateColumns = "repeat("+dimensionXY+",1fr)"
    
}
const squareDivs = document.querySelectorAll('.square');
squareDivs.forEach(squareDiv => {
    squareDiv.addEventListener('mouseenter', hover);
    squareDiv.addEventListener('mouseleave', hoverEnd)
    squareDiv.addEventListener('mousedown', draw); 
    squareDiv.addEventListener('mouseover', draw); 
        });
    
}
//Adding Colors 
let colorPallete = document.querySelector('input');
colorPallete.addEventListener('change', choose)
function choose (e) {
    // console.log(e.target.value);
    let currentColor;
    currentColor = e.target.value;
    console.log(currentColor);
}
console.log(colorPallete.value);
//Adding Modes 
    //setCurrentMode function
function setCurrentMode (newMode) {
    activateButton(newMode)
    currentMode = newMode;
}

    //Get Buttons
const colorBtn = document.querySelector('.colorBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const eraserBtn = document.querySelector('.eraserBtn');
    //Add Event Handlers
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');

    //activateButton function
function activateButton (newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }

    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    } else if (newMode === 'color') {
        colorBtn.classList.add('active');
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active');
    }
}
