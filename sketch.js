// Project Title Stuff When I'm bored
// Your Name(s) You Mama
// Date  Oct 67

let slotOutcome = [1, 2, 3, 4, 5, 6, 7]

function setup() {
  createCanvas(400, 600);
  background(240);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(15);
}

function draw() {
  background(0);
  drawSlotMachine(200, 300, 100, 150);
}

function drawSlotMachine(x, y, w, h) {
  fill("yellow");
  rect(x, y, w, h);
  fill(255);
  rect(x, y - h / 3, w, h / 4);
}

function slots(x, y) {

}
