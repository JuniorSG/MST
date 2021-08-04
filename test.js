var Acel_x = document.getElementById("A_x");
var Acel_y = document.getElementById("A_y");
var Acel_z = document.getElementById("A_z");
var Absolute = document.getElementById("Absolute");
var Alpha = document.getElementById("Alpha");
var Beta = document.getElementById("Beta");
var Gamma = document.getElementById("Gamma");





window.addEventListener('devicemotion', function(event) {
    Acel_x.innerHTML=event.x + ' m/s2';
    Acel_y.innerHTML=event.y + ' m/s2';
    Acel_z.innerHTML=event.z + ' m/s2';
  });

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    
    Absolute.innerHTML=absolute + ' Absolute';
    Alpha.innerHTML=alpha + ' Alpha';
    Beta.innerHTML=beta + ' Beta';
    Gamma.innerHTML=gamma + ' Gamma';
  }