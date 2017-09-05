//hummingbird
//green: 4, 255, 98
//purple: 162, 9, 255
//pink: 252, 17, 255

//var bgColor = 200;
var humColor = 220;
var awake = true;

function setup() {
  createCanvas(800,900);
}

function draw() {
  
  //background(bgColor);
  background(109,184,255);
  cloud(600,100,100);
  cloud(730,150,150);
  fill(84,255,136);
  arc(0, 900, 1800, 1900, PI-PI/10, PI/5, CHORD);

  stroke(0, 0, 0);

  flower(100, 700); //calling the function
  flower(400, 600);
  flower(500, 300);
  flower(200, 280);
  flower(300, 200);
  flower(250, 500);
  flower(90, 420);
  flower(70, 100);

  translate(mouseX-500, mouseY-500);
  
  wing(260, 590, 280, 680, 470, 700, 470, 640); //his right wing (appears on screen left)
  bodySegment(530, 700, 250, 300); //torso
  bodySegment(500, 400, 500, 400); //head
  eye(350,450,330,470); //his right eye (appears on screen left)
  eye(550,400,530,420); //his left eye (appears on screen right)
  beak(470,470);
  wing(780, 540, 730, 640, 570, 700, 570, 630); //his left wing (appears on the right)
  
  if (!awake)
  {
    eyelids(350,450,550,400);
  }
  else 
  {
    eye(350,450,330,470); //his right eye (appears on screen left)
    eye(550,400,530,420); //his left eye (appears on screen right)
  }
  
}


function keyPressed()
{
  /*
  if (keyCode === ENTER)
  {
    bgColor = color(random(256), random(256), random(256));
  }
  */
  if (keyCode === ENTER)
  {
    humColor = color(random(256), random(256), random(256));
  }
}

function mousePressed()
{
  if (mousePressed)
  {
    awake = !awake;
  }
}

function bodySegment(x,y,w,h)
{
  //fill(4, 255, 98); //green
  fill(humColor);
  ellipse(x,y,w,h);
}

function eye(x1,y1,x2,y2)
{
  fill(255, 255, 255); //white
  ellipse(x1, y1, 100);
  fill(0,0,0); //black
  ellipse(x2, y2, 30);
}

function beak(x,y) // (x,y) is the top right corner of the beak
{
  fill(252, 17, 255); //pink
  triangle(x-300, y+100, x, y, x-10, y+60);
}

function wing(x1,y1,x2,y2,x3,y3,x4,y4)
{
  var wingColor = color(random(100, 256), 0, random(100, 256));
  fill(wingColor); //a shade of purple
  quad(x1,y1,x2,y2,x3,y3,x4,y4);
}

function eyelids(x1,y1,x2,y2) //x and y of each eye
{
  var w = 100;
  var h = 100;
  fill(humColor);
  arc(x1, y1, w, h, PI-PI/10, PI/5, CHORD);
  arc(x2, y2, w, h, PI-PI/10, PI/5, CHORD);
}

function flower(x,y) //implementation of the function
{
  fill(color(220,100,255));
  translate(x,y);
 for (var i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 80);
   rotate(PI/5);
   }
   translate(-x,-y);
}

function cloud(x,y,w)
{
  noStroke();
  var h = w;
  fill(240);
  arc(x, y, w, h, PI, 0, CHORD);
  arc(x+w/2, y, w, h/3, PI, 0, CHORD);
  arc(x-w/2, y, w, h/2, PI, 0, CHORD);
}