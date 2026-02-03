var value1 = 'white';
var lineColor = "blue";
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('value1');
 
  //bg again smh
  square(0,0,400)
  fill(value1);
  circle(60,50,50);
  
  //lake
  ellipse(200,325,300,100);
  
  //mountains
  stroke(lineColor)
  line(0,250,400,250);
  line(0,90,120,250);
  line(60,170,120,110);
  line(120,110,160,155);
  line(250,50,101,225);
  line(250,50,285,90);
  line(285,90,370,0);

  //text
  text('Vince Olsen',320,380)
  text('Mountain Lake',10,18)
  
}

function mouseClicked(){
  if(lineColor == 'blue'){
    lineColor = 'black';
 }else{
   lineColor ='blue' 
 }
}

function mouseClicked(){
  if(value1 == 'white'){
    value1 = 'black';
  }else{
    value1 = 'white'
  }
}
