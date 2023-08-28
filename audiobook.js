let wWidth = window.innerWidth;
let wHeight = window.innerHeight;
let sliderA;
let sliderB;
let sliderC;
let languageButton;
//language mode: 0=ger, 1=esp
let sprache = 1;
let audioESP;
let musicESP;
let soundESP;
let audioGER;
let musicGER;
let soundGER;
let playButton;


function preload(){
    soundFormats('mp3');
    audioESP = loadSound('assets/text_1');
    musicESP = loadSound('assets/musicESP');
    soundESP = loadSound ('assets/soundESP');
    audioGER = loadSound('assets/text_2');
    musicGER = loadSound('assets/musisGER');
    soundGER = loadSound('assets/soundGER');
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    // create slider for music
    sliderA = createSlider(0,100,0);
    sliderA.position(20,20);
    sliderA.style('width', '400px');

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
        musicESP.stop();
        soundESP.stop();
        audioGER.stop();
        musicGER.stop();
        soundGER.stop();
        playButton.html('Play');
    }    
    else{
        audioESP.play();
        musicESP.play();
        soundESP.play();
        audioGER.play();
        musicGER.play();
        soundGER.play();
        playButton.html('Stop');
    }
}

function sprachFunction(){
    if (language == 1){
        language = 0;
        audioESP.setVolume(0);
        musicESP.setVolume(0);
        soundESP.setVolume(0);
        audioGER.setVolume(0.8);
        musicGER.setVolume(0.8);
        soundGER.setVolume(0.8);
        languageButton.html('GERMAN');
    }
    else{
        langauge = 1;
        audioESP.setVolume(0.8);
        musicESP.setVolume(0.8);
        soundESP.setVolume(0.8);
        audioGER.setVolume(0);
        musicGER.setVolume(0);
        soundGER.setVolume(0);
        languageButton.html('SPANISH');


    }
}
