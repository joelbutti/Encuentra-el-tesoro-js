const WIDTH = 800;
const HEIGHT = 800;

let target = {

    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
}

let $map = document.getElementById('map');
let $distance = document.getElementById('distance')
let clicks = 0;

$map.addEventListener('click', function (e) {
    
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1> ${distanceHint} </h1>`

    if(distance < 30){
        alert(`Encontraste el tesoro en ${clicks} clicks`);
        location.reload();
    }

})
