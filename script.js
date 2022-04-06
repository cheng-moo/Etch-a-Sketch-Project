//container
const container = document.createElement('div');
container.className='container';
document.body.appendChild(container);
//square divs
for(let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className='square';
    container.appendChild(squareDiv);
}