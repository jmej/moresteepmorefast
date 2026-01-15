let bg;

function setup() {
  createCanvas(400, 400);
  bg = color(255, 0, 0);
}

function draw() {
  background(bg);
  line(0, height/2, width, 0);
  ellipse(width/2, height/2, 100, 100);
  myTriangle(.05, width/3.55, height/4.26);
  //console.log("mouseX: "+mouseX, "mouseY: "+mouseY);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  bg = color(random(255), random(255), random(255));
}

function myTriangle(amountOfWindow, x, y){
  push();
  const size = width * amountOfWindow;
  //triangleMode(CENTER);
  translate(x, y);
  triangle(0, 0, size, size*2, -size, size*2);
  pop();
}