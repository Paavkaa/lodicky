function lod(cell) {
    cell.style.backgroundColor = "black";
}

function zasah(cell) {
    if (cell.style.backgroundColor === "black") {
        cell.style.backgroundColor = "red";
    } 
    if (cell.style.backgroundColor === "red") {
        cell.style.backgroundColor = "red";
    }
    else {
        cell.style.backgroundColor = "white";
    }
}



function vedle(cell)
    {
        cell.style.backgroundColor = "white";
    }
        
function trefa(cell)
    {
        cell.style.backgroundColor = "green";
    }