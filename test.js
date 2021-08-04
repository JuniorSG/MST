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



  


//   THREE JS



  var renderer,
  scene,
  camera,
  canvas = document.getElementById('canvas');

//RENDERER
renderer = new THREE.WebGLRenderer({canvas, alpha: true});
renderer.setClearColor(0xffffff, 0);
// scene.renderer.setClearColor(0xffffff, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth*0.97, window.innerHeight*0.97);

//CAMERA
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 0.9;
camera.position.y = -0.45;


//SCENE
scene = new THREE.Scene();

var light2 = new THREE.PointLight(0xffffff);
scene.add(light2);

var loader = new THREE.GLTFLoader();



loader.load('./RX78.glb', handle_load);



var object;


function handle_load(gltf) {


  object = gltf.scene;

  
  scene.add( object );
  object.position.z = -50;
  object.scale.set(0.2, 0.2, 0.2);
  object.position.set(0, -0.5, 0);
  
  light2.lookAt(object.position);
  light2.position.set(0, 1, 1);
  //RESIZEas
  window.addEventListener("resize", redimensionar); 
  function redimensionar(){
      camera.aspect= window.innerWidth / window.innerHeight;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
  }

//   window.addEventListener("mousemove", (e)=>{
//       var lookX = 0.05*(e.clientX-(window.innerWidth/2))
//       var lookY = (-(0.05*(e.clientY-(window.innerHeight/2)))+5)
//       object.lookAt(lookX,lookY,30);
//       light2.position.set(0, 1, 1);
//       // console.log(cube.lookAt);
//       window.addEventListener("mouseout", (e)=>{
//           lookX=0;
//           lookY=0;
//           light2.position.set(0, 0.5, -0.9);
//           object.lookAt(lookX,lookY,30)
//       });
      
//   });
window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    
    Absolute.innerHTML=absolute;
    Alpha.innerHTML=alpha;
    var lookY =beta;
    var lookX =gamma;
    object.lookAt(lookX,lookY,30);
    // Beta = Y, Gamma = X
  }
}


//RENDER LOOP
render();

// var delta = 0;
// var prevTime = Date.now();

function render() {

  // delta += 0.1;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}