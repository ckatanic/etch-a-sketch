let mode = 'shade';
let trigger = false;

const container = document.getElementById('grid-container');
const button = document.getElementById('button');
const sizeSlider = document.getElementById('gridSizeSlider');
const currentGridSize = document.getElementById('currentGridSize');
const normalButton = document.getElementById('normal');
const rainbowButton = document.getElementById('rainbow');
const eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', function() {
    mode='eraser';
})
normalButton.addEventListener('click', function() {
    mode='normal';
})
rainbowButton.addEventListener('click', function() {
    mode='rainbow';
})

sizeSlider.onchange = (e) => {
    container.innerHTML="";
    createGrid(e.target.value);
    currentGridSize.innerText=`${e.target.value} x ${e.target.value}`;
}
sizeSlider.onmousemove = (e) => {
    console.log(e.target.value);
    currentGridSize.innerText=`${e.target.value} x ${e.target.value}`;
}

// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     let numberPerGrid = document.getElementById('numberPerRow').value;
//     if (numberPerGrid > 100 || numberPerGrid < 3) {
//         alert("Please enter a number greater than 2 and less than 101");
//         return;
//     } else {
//         container.innerHTML="";
//         createGrid(numberPerGrid);
//     }
    
// })

function createGrid(number) {
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
                if(mode === 'shade') {
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
        // newDiv.innerText=`${i}`;
        container.appendChild(newDiv);
    }
}

createGrid(16);


