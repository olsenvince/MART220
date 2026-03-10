//character and environment assets from https://www.gameart2d.com/free-platformer-game-tileset.html

let sheetImg;
let landscape;

function preload(){
    landscape = loadImg(landscape.png)
    sheetImg = loadImg("tilesetImages/1.png")
}
function setup(){
    createCanvas(windowWidth, windowHeight, "pixelated x4");
    //world.gravity.y = 10;
    background(landscape);
}


function draw(){
    
}

