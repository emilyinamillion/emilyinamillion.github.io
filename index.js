let img;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  // beginShape();
  fill(255, 192, 203, 70)
  strokeWeight(4);
  stroke(51);
  circle(mouseX, mouseY, 100)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(200);
  canvas.position(0,0);
  canvas.style("z-index", -1);

};

function draw() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", -1);
  mouseMoved();

  let element;
  window.addEventlistener("load",init);
  function init() {
    let element = window.document.getElementById('name');
    // let rect = element.getBoundingClientRect();
    element.addEventListener("click", function {
      element.style.color = getRandomColor();
    })
  }


};
