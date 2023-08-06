let mode = 'normal';
let trigger = false;
let currentGridSize = 16;

console.log(document.getElementById(`${mode}`));

const container = document.getElementById('grid-container');
const button = document.getElementById('button');
const sizeSlider = document.getElementById('gridSizeSlider');
const gridSizeDisplay = document.getElementById('gridSizeDisplay');
const normalButton = document.getElementById('normal');
const rainbowButton = document.getElementById('rainbow');
const eraserButton = document.getElementById('eraser');
const shaderButton = document.getElementById('shader');
const resetButton = document.getElementById('reset');


normalButton.addEventListener('click', function() {
    removeActiveClassFromCurrentMode();
    mode='normal';
    normalButton.classList.add('active');
})
rainbowButton.addEventListener('click', function() {
    removeActiveClassFromCurrentMode();
    mode='rainbow';
    rainbowButton.classList.add('active');
})
shaderButton.addEventListener('click', function() {
    removeActiveClassFromCurrentMode();
    mode='shader';
    shaderButton.classList.add('active');
})
eraserButton.addEventListener('click', function() {
    removeActiveClassFromCurrentMode();
    mode='eraser';
    eraserButton.classList.add('active');
})
resetButton.addEventListener('click', function() {
    createGrid(currentGridSize);
})

sizeSlider.onchange = (e) => {
    
    createGrid(e.target.value);
    currentGridSize = e.target.value;
    gridSizeDisplay.innerText=`${e.target.value} x ${e.target.value}`;
}
sizeSlider.onmousemove = (e) => {
    gridSizeDisplay.innerText=`${e.target.value} x ${e.target.value}`;
}

function removeActiveClassFromCurrentMode() {
    let currentMode = document.getElementById(`${mode}`)
    currentMode.classList.remove('active');
}

function createGrid(number) {
    container.innerHTML="";
    let cellsPerSide = number;
    let cellWidth = 600/cellsPerSide;

    container.style.gridTemplateColumns = `repeat(${cellsPerSide}, 1fr)`;
    container.style.gap='0';
    document.addEventListener('mousedown', function() {
        trigger= true;
    });
    document.addEventListener('mouseup', () => {
        trigger=false;
    });

    for (let i=0; i<(cellsPerSide*cellsPerSide); i++) {
        const newDiv = document.createElement('div');
        newDiv.addEventListener('mouseenter', () => {
            if (trigger === true) {
                let cell = document.getElementById(`cell${i}`);
                if(mode === 'shader') {
                    switch(cell.style.backgroundColor) {
                        case 'rgba(0, 0, 0, 0)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                            break;
                        case 'rgba(0, 0, 0, 0.1)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                            break;
                        case 'rgba(0, 0, 0, 0.2)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                            break;
                        case 'rgba(0, 0, 0, 0.3)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                            break;
                        case 'rgba(0, 0, 0, 0.4)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                            break;
                        case 'rgba(0, 0, 0, 0.5)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                            break;
                        case 'rgba(0, 0, 0, 0.6)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                            break;
                        case 'rgba(0, 0, 0, 0.7)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                            break;
                        case 'rgba(0, 0, 0, 0.8)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                            break;
                        case 'rgba(0, 0, 0, 0.9)':
                            cell.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                            break;
                        default:
                            break;
                    }
                } else if (mode === 'normal') {
                    console.log('test')
                    cell.style.backgroundColor='rgba(0, 0, 0, 1)';
                } else if (mode === 'rainbow') {
                    let r = (Math.floor(Math.random()*256));
                    let g = (Math.floor(Math.random()*256));
                    let b = (Math.floor(Math.random()*256));
                    console.log(r);
                    cell.style.backgroundColor=`rgba(${r}, ${g}, ${b}, 1)`;
                } else if (mode === 'eraser') {
                    cell.style.backgroundColor='rgba(0, 0, 0, 0)';
                }
            }
        })
        newDiv.id=`cell${i}`;
        newDiv.style.width=`${cellWidth}px`;
        newDiv.style.height=`${cellWidth}px`;
        newDiv.style.border='0.5px solid #999';
        newDiv.style.backgroundColor=`rgba(0, 0, 0, 0)`;
        container.appendChild(newDiv);
    }
}

createGrid(16);


