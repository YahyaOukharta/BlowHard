//global variables ..
var tileSize;

var sprites;

var controller;
var player;

function preload(){
    sprites = loadImage("assets/bh-chars.png"); //loading sprites 
}

function setup(){
    createCanvas(500,500);

    tileSize=width/10;  

        //initializing game objects 
    controller = new Controller();
    player = new Player( sprites );

}
function draw(){
    background(100,0,20);
    noSmooth();     //to disable image smoothing...

    player.run();
}