const container = document.getElementById('container');
let trigger = false;
let cellsPerSide = 52;
let cellWidth = 600/cellsPerSide;

container.style.gridTemplateColumns = `repeat(${cellsPerSide}, 1fr)`;
container.style.gap='0';
document.addEventListener('mousedown', function() {
    trigger= true;
});
document.addEventListener('mouseup', () => {
    trigger=false;
});

for (let i=1; i<(cellsPerSide*cellsPerSide+1); i++) {
    const newDiv = document.createElement('div');
    newDiv.addEventListener('mouseenter', () => {
        if (trigger === true) {
            newDiv.classList.add('hover');
        }
    })
    newDiv.style.width=`${cellWidth}px`;
    newDiv.style.height=`${cellWidth}px`;
    newDiv.style.border='0.5px solid #999';
    // newDiv.innerText=`${i}`;
    container.appendChild(newDiv);
}


