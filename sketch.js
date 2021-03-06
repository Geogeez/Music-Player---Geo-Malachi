let song;

function preload() {
song1 = loadSound("deja-vu.mp3");
song2 = loadSound("run-vine-sound-effect.mp3");
song3 = loadSound("ali-as-meme-intro-original-download.mp3")
song4 = loadSound("03 Main Menu.mp3")
song5 = loadSound("28 Super Buu.mp3")
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
    
     createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton('"Main Menu" ');
     button.position(200, 575);
     button.mousePressed(songPlay4);
    
    createCanvas(innerWidth,innerHeight);
     background(200);
     button = createButton(' "Super Buu" ');
     button.position(200, 600);
     button.mousePressed(songPlay5);
    
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

function songPlay4(){
    if(song4.isPlaying()) {
        song4.stop();
        background('green');

}
        else{
            song4.play();
            background('red')
        }
}

function songPlay5(){
    if(song5.isPlaying()) {
        song5.stop();
        background('black');
}
        else{
            song5.play();
            background('pink')
        }
}
                
