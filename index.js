function dick(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function dickroll(){
    document.getElementById('output').innerHTML = dick(1,6)
}

