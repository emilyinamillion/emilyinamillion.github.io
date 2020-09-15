let img;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  // beginShape();
  fill(255, 192, 203, 70)
  strokeWeight(4);
  stroke(51);
  bubble = circle(mouseX, mouseY, 100)

  endShape(CLOSE);
  // prevent default
  return false;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(200);
  // let img = loadImage('ersatzGirl/IMG_1294.png');
  canvas.position(0,0);
  canvas.style("z-index", -1);
  // background(88, 24, 69);
};

function draw() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", -1);
  // createCanvas(10000, 10000);
  // let img = loadImage('ersatzGirl/IMG_1294.png');
  // image(img, 0, 0);
  mouseMoved();
  // beginShape();
  // fill(255, 192, 203, 70)
  // strokeWeight(4);
  // stroke(51);
  // circle(mouseX, mouseY, 100)
  // endShape(CLOSE);

};
