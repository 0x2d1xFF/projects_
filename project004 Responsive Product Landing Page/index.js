function increment () {
    var add = document.getElementById("quantity");
    var currentQuantity = parseInt(add.textContent); 
    var newSum = currentQuantity + 1; 
    add.textContent = newSum; 
}

function decrement () {
    var sub = document.getElementById("quantity");
    var currentQuantity = parseInt(sub.textContent); 
    if (currentQuantity > 1) {
        var newDiff = currentQuantity - 1; 
        sub.textContent = newDiff; 
    }
    
}