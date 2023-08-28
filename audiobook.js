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
// sound FX variables
let intro;
let introB;
let magic;
let magicB;
let goose;
let gooseB;
let gate;
let gateB;
let falada;
let faladaB;
let danger;
let dangerB;
let outro;
let outroB;
let water;
let waterB;



function preload(){
    soundFormats('mp3');
    audioESP = loadSound('assets/text_1');
    musicESP = loadSound('assets/musicESP');
    soundESP = loadSound ('assets/soundESP');
    audioGER = loadSound('assets/text_2');
    musicGER = loadSound('assets/musicGER');
    soundGER = loadSound('assets/soundGER');
    intro = loadSound('assets/intro');
    magic = loadSound('assets/magic');
    goose = loadSound('assets/goose');
    gate = loadSound('assets/gate');
    falada = loadSound('assets/falada');
    outro = loadSound('assets/outro');
    water = loadSound('assets/water');
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    // create slider for music
    sliderA = createSlider(0,100,80);
    sliderA.position(20,20);
    sliderA.style('width', '400px');

    //create slider for sound
    sliderB = createSlider(0,100,80);
    sliderB.position(20,80);
    sliderB.style('width', '400px');

    //create slider for voice
    sliderC = createSlider(0,100,80);
    sliderC.position(20,140);
    sliderC.style('width', '400px');

    //play Button for all
    playButton = createButton('Play');
    playButton.position(wWidth/2, wHeight/2);
    playButton.mousePressed(playFunction);

    //language Button for switching languages
    languageButton = createButton('español')
    languageButton.position(wWidth/2, wHeight/2-20);
    languageButton.mousePressed(sprachFunction);
    //default language spanish
    sprache = 1;
    audioESP.setVolume(0.8);
    musicESP.setVolume(0.8);
    soundESP.setVolume(0.8);
    audioGER.setVolume(0);
    musicGER.setVolume(0);
    soundGER.setVolume(0);

    //sound fx buttons
    introB = createButton('1');
    introB.position(wWidth/2, wHeight/2-40);
    introB.mousePressed(introFunction);

    magicB = createButton('2');
    magicB.position(wWidth/2, wHeight/2-60);
    magicB.mousePressed(magicFunction);

    gooseB = createButton('3');
    gooseB.position(wWidth/2, wHeight/2-80);
    gooseB.mousePressed(gooseFunction);

    gateB = createButton('4');
    gateB.position(wWidth/2, wHeight/2-100);
    gateB.mousePressed(gateFunction);

    faladaB = createButton('1');
    faladaB.position(wWidth/2, wHeight/2-40);
    faladaB.mousePressed(faladaFunction);
    


 
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
    if (sprache == 1){
        sprache = 0;
        audioESP.setVolume(0);
        musicESP.setVolume(0);
        soundESP.setVolume(0);
        audioGER.setVolume(0.8);
        musicGER.setVolume(0.8);
        soundGER.setVolume(0.8);
        languageButton.html('GERMAN');
    }
    else{
        sprache = 1;
        audioESP.setVolume(0.8);
        musicESP.setVolume(0.8);
        soundESP.setVolume(0.8);
        audioGER.setVolume(0);
        musicGER.setVolume(0);
        soundGER.setVolume(0);
        languageButton.html('SPANISH');


    }
}
