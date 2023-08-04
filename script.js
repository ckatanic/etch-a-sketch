const container = document.getElementById('container');
let trigger = false;
let cellPerSide = 100;
let cellWidth = 800/cellPerSide;

container.style.gridTemplateColumns = `repeat(${cellPerSide}, 1fr)`;
document.addEventListener('mousedown', function() {
    trigger= true;
});
document.addEventListener('mouseup', () => {
    trigger=false;
});

for (let i=0; i<(cellPerSide*cellPerSide); i++) {
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


