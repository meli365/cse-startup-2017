var paddle1;
var paddle1_x, paddle1_y;
var paddle2;
var paddle2_x, paddle2_y;
var ball;
var ball_x;
var ball_y;
var bounce;
var points;
var ball_y_change;
var ballColor;
var restartAllowed;

function setup() {
  createCanvas(700,500);
  background(0);
  fill(255);
  paddle1_x = 650;
  paddle1_y = 200;
  paddle2_x = 50;
  paddle2_y = 200;
  paddle1 = rect(paddle1_x, paddle1_y, 15, 100);
  paddle2 = rect(paddle2_x, paddle2_y, 15, 100);
  ball_x = 350;
  ball_y = 250;
  ballColor = 255;
  fill(ballColor);
  ball = ellipse(ball_x, ball_y, 26);
  bounce = false;
  points = 0;
  ball_y_change = 0;
  restartAllowed = false;
}

function draw() {
  if (ball_x-15 > 700 || ball_x+30 < 0) { //goes off right or left side
    fill(255,0,0);
    textSize(125);
    text("Game Over",25,300);
    restartAllowed = true; //press ENTER to play again
  }
  else {
    movePaddles();
    moveBall();
    displayPoints();
  }
}

function movePaddles() {
  fill(0);
  rect(paddle1_x, paddle1_y, 15, 100);
  rect(paddle2_x, paddle2_y, 15, 100);
  if (keyIsDown(UP_ARROW) && paddle1_y>0) { //use up and down arrows to move right paddle
    paddle1_y -=2;
  }
  if (keyIsDown(DOWN_ARROW) && paddle1_y<400) {
    paddle1_y +=2;
  }
  if (keyIsDown(SHIFT) && paddle2_y>0) { //use shift and control keys to move left paddle
    paddle2_y -=2;
  }
  if (keyIsDown(CONTROL) && paddle2_y<400) {
    paddle2_y +=2;
  }
  fill(255);
  paddle1 = rect(paddle1_x, paddle1_y, 15, 100);
  paddle2 = rect(paddle2_x, paddle2_y, 15, 100);
}

function checkForHit() {
  if ((ball_y+13 < paddle1_y+100 && ball_y-13 > paddle1_y) 
      || (ball_y+13 < paddle2_y+100 && ball_y-13 > paddle2_y)) { //within y range of either paddle
    if (ball_x+13 > paddle1_x) { //hits right paddle
      bounce = true;
      ball_y_change = random(-2,2);
      ballColor = color(random(100,255), random(100,255), random(100,255));
      points++;
    }
    else if (ball_x-13 < paddle2_x+13) { //hits left paddle
      bounce = false;
      ball_y_change = random(-2,2);
      ballColor = color(random(100,255), random(100,255), random(100,255));
      points++;
    }
  }
  else if (ball_y-15 < 0) { //hits top wall
    ball_y_change = random(2);
  }
  else if (ball_y+15 > 500) { //hits bottom wall
    ball_y_change = random(-2,0);
  }
}

function moveBall() {
  fill(0);
  ball = ellipse(ball_x, ball_y, 25);
  if (!bounce) { //ball moves to the right
    ball_x+=4;
  }
  else { //ball moves to the left
    ball_x-=4;
  }
  ball_y+=ball_y_change;
  fill(ballColor);
  ball = ellipse(ball_x, ball_y, 25);
  checkForHit();
}

function displayPoints() {
  fill(0);
  rect(600, 0, 200, 50);
  fill(255, 0, 255);
  textSize(30);
  text("SCORE: " + points, 540, 50);
}

function keyPressed() {
  if (keyCode === ENTER && restartAllowed) {
  background(0);
  fill(255);
  paddle1_x = 650;
  paddle1_y = 200;
  paddle2_x = 50;
  paddle2_y = 200;
  paddle1 = rect(paddle1_x, paddle1_y, 15, 100);
  paddle2 = rect(paddle2_x, paddle2_y, 15, 100);
  ball_x = 350;
  ball_y = 250;
  ballColor = 255;
  fill(ballColor);
  ball = ellipse(ball_x, ball_y, 26);
  bounce = false;
  points = 0;
  ball_y_change = 0;
  restartAllowed = false;
  }
}