var monster_img;
var cookie_img;
var pie_img;
var cake_img;
var points;
var missed;
var monster_x, monster_y;
var cookie_x, cookie_y;
var pieSpawns;
var cakeSpawns;
var pie_x, pie_y;
var cake_x, cake_y;
var restartEnabled;
var button;
var topScore;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  pie_img = loadImage("assets/pie.png");
  cake_img = loadImage("assets/cake.png");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  points = 0;
  missed = 0;
  topScore = 0;
  pieSpawns = false;
  cakeSpawns = false;
  restart = false;
  button = createButton('Play Again');
  button.position(-100,-100);
}

function draw() {
  background(200);
  displayPoints();
  
  image(monster_img, monster_x, monster_y);
  image(cookie_img, cookie_x, cookie_y);
  
  if (int(random(2000))==20 && !pieSpawns) {
    pieSpawns = true;
    pie_x = 725;
    pie_y = random(350);
  }
  
  if (int(random(2000))==30 && !cakeSpawns) {
    cakeSpawns = true;
     cake_x = 725;
     cake_y = random(350);
  }
  
  if (missed>2) {
      fill(255,0,0);
      textSize(125);
      text("Game Over",50,300);
      restartEnabled = true;
      if (points > topScore) {
        topScore = points;
      }
  }
  else {
    moveCookie();
    moveMonster();
    checkForChomp();
    if (pieSpawns) {
     image(pie_img, pie_x, pie_y);
     movePie();
    }
    if (cakeSpawns) {
     image(cake_img, cake_x, cake_y);
     moveCake();
    }
  }
  
  if (restartEnabled) {
    button.position(400,100);
    restartEnabled = false;
    button.mousePressed(startOver);
  }
}



function displayPoints() {
  fill(160);
  textSize(150);
  text(points,10,370);
  textSize(50);
  text("missed: " + missed, 10, 50);
  fill(0);
  textSize(20);
  text("top score: " + topScore, 600, 380);
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
    missed++;
  }
  else 
    cookie_x -= 4 + (points * 0.01);
}

function movePie() {
  if(pie_x < 0) {
    pieSpawns = false;
    missed++;
  }
  else 
    pie_x -= 3;
}

function moveCake() {
  if(cake_x < 0) {
    cakeSpawns = false;
    missed++;
  }
  else 
    cake_x -= 6;
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;
  if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 2;
  if(keyIsDown(RIGHT_ARROW) && monster_x < 580)
    monster_x += 2;
}

function checkForChomp() {
  var d1 = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d1 < 100) {
    points += 1;
    cookie_x = 725;
    cookie_y = random(350);
  }
    var d2 = dist(pie_x, pie_y, monster_x, monster_y);
  if (d2 < 100) {
    points += 1;
    pie_x = 725;
    pie_y = random(350);
  }
    var d3 = dist(cake_x, cake_y, monster_x, monster_y);
  if (d3 < 100) {
    points += 1;
    cake_x = 725;
    cake_y = random(350);
  }
}

function keyPressed() {
  if (missed>2 && keyCode === ENTER) {
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  points = 0;
  missed = 0;
  pieSpawns = false;
  cakeSpawns = false;
  }
}

function startOver() {
  button.position(-100,-100);
  monster_x = 150;
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  points = 0;
  missed = 0;
  pieSpawns = false;
  cakeSpawns = false;
}