const container = document.getElementById('container');
const button = document.getElementById('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let numberPerGrid = document.getElementById('numberPerRow').value;
    if (numberPerGrid > 100 || numberPerGrid < 3) {
        alert("Please enter a number greater than 2 and less than 101");
        return;
    } else {
        container.innerHTML="";
        createGrid(numberPerGrid);
    }
    
})
let trigger = false;
opacityArray = [];

function createGrid(number) {
    let cellsPerSide = number;
    let cellWidth = 600/cellsPerSide;
    for (let i = 0; i < cellsPerSide*cellsPerSide; i++) {
        opacityArray[i]=0;
    }

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


