const sketchpad = document.getElementById('sketchpad');
document.getElementById('sketchpad').style.cssText = 'display: flex; flex-direction: column; border: 1px solid black;'



function createGrid(gridsize){
    if (gridsize > 100){
        alert('please enter a value 1 - 100')
        return;
    }
    document.querySelectorAll('.clearfunction').forEach(e => e.remove());
    for (let i = 0; i < gridsize; i++){
        let row = document.createElement('div');
        row.classList.add('clearfunction')
        row.style.cssText = 'border: 1px solid rgba(0, 0, 0, 0.1); height: 100%; width: 100%; display: flex; margin: 0px -1px; padding: 0px;'
            for (let j = 0; j < gridsize; j++){
                let square = document.createElement('div');
                square.style.cssText = 'border: 1px solid rgba(0, 0, 0, 0.1); height: 100%; width: 100%; margin: 0px; padding: 0px;';
                square.addEventListener('mouseenter', function() {
                    square.classList.add('hover')
                    square.classList.add('clearfunction')
                });
                row.appendChild(square)
            }
        sketchpad.appendChild(row);
        console.log(i)
    }
    
}

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener("click", function(){
    Array.from(document.querySelectorAll('.hover')).forEach(function(el) { 
        el.classList.remove('hover');
        })
    });
const newGridBtn = document.getElementById('newgrid');
newGridBtn.addEventListener('click', function(){
    
    createGrid(prompt('Enter Gridsize'))
})

createGrid(64)