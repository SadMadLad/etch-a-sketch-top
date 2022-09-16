const showColor = document.querySelector('span');
const changeColor = document.querySelector('.change-color');
const eraseButton = document.querySelector('.erase');

const colors = ['red', 'yellow', 'coral', 'blue', 'green', 'brown', 'black', 'purple', 'pink', 'aqua', 'royalblue'];
let colorIndex = 0;

changeColor.addEventListener('click', ()=>{
    colorIndex = (colorIndex + 1) % colors.length;
    showColor.textContent = colors[colorIndex];
});

eraseButton.addEventListener('click', ()=>{
    const cells = document.querySelectorAll('.grid-element');
    cells.forEach(
        (cell) => cell.style['background-color'] = 'white'
    )
});

function askGridSize() {
    let num = prompt('Grid Size: ');
    num = parseInt(num);

    if (num < 16 || num > 128 || isNaN(num)){
        alert('Grid Size should be between 16 and 128 and should be valid');
        num = 64;
    }

    return num;
}

function addEvent() {
    const cells = document.querySelectorAll('.grid-element');
    cells.forEach(
        (cell) => cell.addEventListener('mouseenter', (e) =>{
            e.target.style['background-color'] = colors[colorIndex];
        })
    );
}

function createGrid(num){
    const gridRoot = document.querySelector("#grid");
    const createRow = document.createElement('div');

    for(let i=0; i<num; i++){
        const singleCell = document.createElement('div');
        singleCell.classList.add('grid-element');
        createRow.appendChild(singleCell);
    }
    createRow.setAttribute('class', 'grid-row');

    for(let i=0; i<num; i++){
        gridRoot.appendChild(createRow.cloneNode(true));
    }
}

num = askGridSize();
createGrid(num);
addEvent();