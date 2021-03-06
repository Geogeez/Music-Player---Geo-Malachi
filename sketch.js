let song;

function preload() {
song1 = loadSound("deja-vu.mp3");
song2 = loadSound("run-vine-sound-effect.mp3");
song3 = loadSound("ali-as-meme-intro-original-download.mp3")

}
function setup(){
     createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton('Deja Vu');
     button.position(200, 500);
     button.mousePressed(songPlay1);
    
     createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton(' "Run" ');
     button.position(200, 525);
     button.mousePressed(songPlay2); 
    
    createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton('"Ali-a Intro" ');
     button.position(200, 550);
     button.mousePressed(songPlay3); 
    
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
function songPlay3(){
    if(song3.isPlaying()) {
        song3.stop();
        background('purple');
    
}
      else{
          song3.play();
          background('pink');
      }
}
