
let getRandomNumber = size => {
    
    return Math.floor(Math.random() * size);   
}

let getDistance = (event, target) => {

    let diffx = event.offsetX - target.x;
    let diffy = event.offsetY - target.y;
    return Math.sqrt((diffx * diffx) + (diffy * diffy));
}

let getDistanceHint = distance => {

    if(distance <50){
        return "Hirviendo!"
    } else if( distance <80){
        return "Muy caliente!"
    } else if(distance < 150){
        return "Caliente"
    } else if(distance < 200){
        return "Tibio"
    } else if (distance < 250){
        return "Frio"
    } else {
        return "Congelado!"
    }
}