//character and environment assets from https://www.gameart2d.com/free-platformer-game-tileset.html

var sheetImg;
var landscape;

function preload(){
    landscape = loadImg(landscape.png)
    //sheetImg = loadImg("tilesetImages/1.png")
}
function setup(){
    createCanvas(windowWidth, windowHeight,);
    //world.gravity.y = 10;
}

function draw(){
    background(landscape);
}

