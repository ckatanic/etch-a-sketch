const container = document.getElementById('container');
console.log(container);

let cellPerSide = 20;
let cellWidth = 800/cellPerSide;
container.style.gridTemplateColumns = `repeat(${cellPerSide}, 1fr)`;

for (let i=0; i<(cellPerSide*cellPerSide); i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width=`${cellWidth}px`;
    newDiv.style.height=`${cellWidth}px`;
    newDiv.style.border='0.5px solid #777';
    container.appendChild(newDiv);
}


