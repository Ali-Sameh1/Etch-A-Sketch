const gridArea = 600;
let squarePerSide = 16;
let color = 'blue';
let randomColor = getRandomColor();

const container = document.querySelector('#container');
container.style.width = container.style.height = `${gridArea}px`;

function createGridCells(squarePerSide){
    const widthAndHeight = `${squarePerSide * squarePerSide}`;
    const widthAreaAndHeight = `${(gridArea / squarePerSide) -2}`;
    for (let i = 1 ; i <= widthAndHeight ; i++ ){
        let gridCells = document.createElement('div');
        gridCells.style.width = gridCells.style.height = `${widthAreaAndHeight}px`;

        container.appendChild(gridCells);
        gridCells.classList.add('cell');

        gridCells.addEventListener('mouseover', colorDiv);
    }
}

createGridCells(squarePerSide);


function removeGridCells(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const sizeButton = document.querySelector('#sizeButton');

function createUserGrid(){
    let size = prompt('enter your size: ');
    if (size > 100 || size <= 0){
        alert('pls enter a value above 0 and below 100')
    }
    else if (size == ''){
        alert('please enter a value')
    }
    else{
        removeGridCells();
        createGridCells(size)
    }
    
}

sizeButton.addEventListener('click', createUserGrid);

function setColor(colorChoice){
    color = colorChoice;
}

function colorDiv (){
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360},100%, 50%)`;
    }
    else{
        this.style.backgroundColor = 'blue'
    }
}


const clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click' , clear)


function getRandomColor (){
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 

    let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    return color;
}


function clear () {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}