let song;

function preload() {
song1 = loadSound("deja-vu.mp3");
song2 = loadSound("03 MainMenu.mp3");
song3 = loadSound("28 - SuperBuu.mp3");


}
function setup(){
     createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton('Play');
     button.position(19, 19);
     button.mousePressed(songPlay1);
    
     createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton('Play');
     button.position(19, 19);
     button.mousePressed(songPlay2); 
    
    }
function draw() {
    
}
function songPlay1(){
        if(song1.isPlaying()) {
        song1.stop();
        background('blue');
    
}
      else{
          song1.play();
          background('red');
      }
    
}

function songPlay2(){
    if(song2.isPlaying()) {
        song2.stop();
        background('orange');
    
}
      else{
          song2.play();
          background('yellow');
      }
}
