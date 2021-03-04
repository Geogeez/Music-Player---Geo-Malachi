let song;

function preload() {
song = loadSound("deja-vu.mp3");
}
function setup(){
     createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton('Play');
     button.position(19, 19);
     button.mousePressed(songPlay); 
    }
function draw() {
    
}

function songPlay(){
    if(song.isPlaying()) {
        song.stop();
        background('blue');
    
}
      else{
          song.play();
          background('red');
      }
}
