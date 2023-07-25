let wWidth = window.innerWidth;
let wHeight = window.innerHeight;
let sliderA;
let sliderB;
let sliderC;
let language;
let audioESP;
let audioGER;
let playButton;

function preload(){
   soundFormats('mp3');
    audioESP = loadSound('assets/text_1')
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    sliderA = createSlider(0,100,0);
    sliderA.position(20,20);
    sliderA.style('width', '400px');
    playButton = createButton('Play');
    playButton.position(wWidth/2, wHeight/2);
    playButton.mousePressed(playFunction);
}

function draw(){
 background(200,200,0);
 rect(200,200,20);

}

function playFunction(){
    if (audioESP.isPlaying()){
        audioESP.stop();
        playButton.html('Play');
    }    
    else{
        audioESP.play();
        playButton.html('Stop');
    }
}
