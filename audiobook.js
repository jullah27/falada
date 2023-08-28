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
    musicGER = loadSound('assets/musicGER');
    soundGER = loadSound('assets/soundGER');
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    // create slider for music
    sliderA = createSlider(0,100,80);
    sliderA.position(20,20);
    sliderA.style('width', '400px');

    //create slider for sound
    sliderB = createSlider(0,100,80);
    sliderB.position(40,20);
    sliderB.style('width', '400px');

    //create slider for voice
    sliderC = createSlider(0,100,80);
    sliderC.position(60,20);
    sliderC.style('width', '400px');

    //play Button for all
    playButton = createButton('Play');
    playButton.position(wWidth/2, wHeight/2);
    playButton.mousePressed(playFunction);

    //language Button for switching languages
    languageButton = createButton('español')
    languageButton.position(wWidth/2, wHeight/2-20);
    languageButton.mousePressed(sprachFunction);

    sprache = 1;
    audioESP.setVolume(0.8);
    musicESP.setVolume(0.8);
    soundESP.setVolume(0.8);
    audioGER.setVolume(0);
    musicGER.setVolume(0);
    soundGER.setVolume(0);

 
}

function draw(){

    let music = sliderA.value()/100;
    let sound = sliderB.value()/100;
    let voice = sliderC.value()/100;
 background(200,200,0);

 if (sprache==1){
    musicESP.setVolume(music, 0.5);
    soundESP.setVolume(sound, 0.5);
    audioESP.setVolume(voice, 0.5);
 }
else {
    musicGER.setVolume(music, 0.5);
    soundGER.setVolume(sound, 0.5);
    audioGER.setVolume(voice, 0.5);
}
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
