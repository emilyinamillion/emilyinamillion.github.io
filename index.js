let img;

function setup() {
  // createCanvas(600, 800);
  frameRate(5);
  let img = loadImage('ersatzGirl/IMG_1294.png');
  console.log(img.height);
  console.log("here");
  // background(88, 24, 69);
};

function draw() {
  // beginShape();
  // createCanvas(10000, 10000);
  // let img = loadImage('ersatzGirl/IMG_1294.png');
  // image(img, 0, 0);
  beginShape();
  fill(255, 192, 203, 70)
  strokeWeight(4);
  stroke(51);
  circle(mouseX, mouseY, 100)
  endShape(CLOSE);

};
