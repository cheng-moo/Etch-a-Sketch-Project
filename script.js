//container
const container = document.createElement('div');
container.className='container';
document.body.appendChild(container);
//Saving the mouseDown state in a variable and it would never change until mouse up
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
//square divs
for(let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className='square';
    let height = 30;
    let width = height;
    while (16 * 16 * height * width > 160000) {
        height--;
        width = height;
    }
    while (16 * 16 * height * width < 160000) {
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
    e.target.style.backgroundColor= colorPallete.value;
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
let colorPallete = document.querySelector('input');
colorPallete.addEventListener('change', choose)
function choose (e) {
    // console.log(e.target.value);
    let currentColor;
    currentColor = e.target.value;
    console.log(currentColor);
}
console.log(colorPallete.value);