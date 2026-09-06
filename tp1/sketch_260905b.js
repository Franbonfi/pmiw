//hola profe, ya se que este tp esta desaprobado pero se me complico la parte de hacer que el array vaya moviendose por las imagenes del fantasma sin que el fondo se me trabara o no apareciera
//ademas me enrrolle mucho queriendo hacer el trabajo con mis propios escenarios que termine quedandome con poco tiempo para hacer la parte de programacion que era mas importante

let c = 4;  
let f = []; 

let movimientoCielo = 0;
let movimientoPiso = 0;
let movimientoFondo = 0;
let movimientoPersonaje = 150;

let tiempoCielo = 0;
let tiempoPiso = 0;
let tiempoFondo = 0;

let velocidadCielo = 20;
let velocidadPiso = 20;
let velocidadFondo = 10;

let contador;
//let estado;

let fondo = []; 

function preload(){
 for( let i = 0 ; i < c ; i++ ){  
   f.push( loadImage('/assetsPJ/f0'+i+'.png') );
  }
  fondo.push( loadImage( "/assetsFondo/Fondo.png" ) );
  fondo.push( loadImage( "/assetsFondo/Cielo.png" ) );
  fondo.push( loadImage( "/assetsFondo/Piso.png" ) );
  
}

function setup() {
  createCanvas(800, 600);
  contador = 0;
  //estado = 0;
  
}


function draw() {
  background(200);
  
  if(millis() - tiempoPiso > velocidadPiso){
   movimientoPiso -= 3;
   tiempoPiso = millis();
  }
  
  if(millis() - tiempoCielo > velocidadCielo){
   movimientoCielo -= 3;
   tiempoCielo = millis();
  
  }
  
  if(millis() - tiempoFondo > velocidadFondo){
   movimientoFondo -= 1;
   tiempoFondo = millis();
  }
  
  //movimientoPersonaje += 1

   
  // Cielo
  image(fondo[1], movimientoCielo, 0, 800, 300);
  image(fondo[1], movimientoCielo + 800, 0, 800, 300);
  
  if(movimientoCielo <= -800){
    movimientoCielo = 0;
  }

  //Bosque
  image(fondo[0], movimientoFondo, 0, 800, 600);
  image(fondo[0], movimientoFondo + 800, 0, 800, 600);
  
  if(movimientoFondo <= -800){
    movimientoFondo = 0;
  }
  // Piso
  image(fondo[2], movimientoPiso, 450, 800, 200);
  image(fondo[2], movimientoPiso + 800, 450, 800, 200);
  
  if(movimientoPiso <= -800){
    movimientoPiso = 0;
  }

  // Personaje
  image(f[contador], movimientoPersonaje, 280);
  
}

function keyPressed(){
  if( key == 'r' ) reset();
}
