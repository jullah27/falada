let wWidth = window.innerWidth;
let wHeight = window.innerHeight;
let sliderA;
let sliderB;
let sliderC;
let languageButton;
//language mode: 0=ger, 1=esp
let sprache = 1;
let audioESP;
let audioGER;
let playButton;


function preload(){
    soundFormats('mp3');
    audioESP = loadSound('assets/text_1');
    audioGER = loadSound('assets/text_2');
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    // create slider for music
    sliderA = createSlider(0,100,0);
    sliderA.position(20,20);
    sliderA.style('width', '400px');
    //create slider for speech
    sliderB = createSlider(0,100,0);
    sliderB.position(40,40);
    sliderB.style('width','400px');
    // create slider for sounds
    sliderC = createSlider(0,100,0);
    sliderC.position(60,60);
    sliderC.style('widht','400px');

    //play Button for all
    playButton = createButton('Play');
    playButton.position(wWidth/2, wHeight/2);
    playButton.mousePressed(playFunction);

    //language Button for switching languages
    languageButton = createButton('español')
    languageButton.position(wWidth/2, wHeight/2-20);
    languageButton.mousePressed(sprachFunction);

    sprache = 1;
    audioGER.setVolume(0);
    audioESP.setVolume(0.8);
}

function draw(){
 background(200,200,0);
 rect(200,200,20);

}

function playFunction(){
    if (audioESP.isPlaying()){
        audioESP.stop();
        audioGER.stop();
        playButton.html('Play');
    }    
    else{
        audioESP.play();
        audioGER.play();
        playButton.html('Stop');
    }
}

function sprachFunction(){
    if (sprache == 1){
        sprache = 0;
        audioESP.setVolume(0);
        audioGER.setVolume(0.8);
        languageButton.html('GERMAN');
    }
    else{
        sprache = 1;
        audioESP.setVolume(0.8);
        audioGER.setVolume(0);
        languageButton.html('SPANISH');


    }
}
