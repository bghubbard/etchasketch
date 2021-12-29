const sketchpad = document.getElementById('sketchpad');
document.getElementById('sketchpad').style.cssText = 'display: flex; flex-direction: column; border: 1px solid black;'
function createGrid(gridsize){
    
    for (let i = 0; i < gridsize; i++){
        let row = document.createElement('div');
        row.style.cssText = 'height: 100%; width: 100%; display: flex; margin: 0px -1px; padding: 0px;'
            for (let j = 0; j < gridsize; j++){
                let square = document.createElement('div');
                square.style.cssText = 'height: 100%; width: 100%; margin: 0px; padding: 0px;'
                row.appendChild(square)
            }
        sketchpad.appendChild(row);
        console.log(i)
    }
    
}
createGrid(100)