// Project Title Stuff When I'm bored
// Your Name(s) You Mama
// Date  Oct 67

let slot1 = [1, 2, 3, 4, 5, 6, 7]
let slot2 = [1, 2, 3, 4, 5, 6, 7]
let slot3 = [1, 2, 3, 4, 5, 6, 7]
let slot1Outcome = 6
let slot2Outcome = 6
let slot3Outcome = 6

function setup() {
  createCanvas(400, 600);
  background(240);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(15);
  textAlign(CENTER, CENTER);
  textSize(40);
  stroke(0);
}

function draw() {
  background(0);
  drawSlotMachine(200, 300, 100, 150);
}

function drawSlotMachine(x, y, w, h) {
  fill("yellow");
  rect(x, y, w, h);
  fill(255);
  rect(x, y - h / 5, w, h / 2);
  slots(x, y - h / 5, w);
}

function slots(x, y, w) {
  fill("red");
  text(slot1[slot1Outcome], x - w / 3, y);
  text(slot2[slot2Outcome], x, y);
  text(slot3[slot3Outcome], x + w / 3, y);
  fill(255);
}

function spinSlots(x, y, w, h) {
  if(pointRectTouch(mouseX, mouseY, x, y, w, h)) {
    
  }
}

function pointRectTouch(pX, pY, rX, rY, rW, rH) {
  return pX > rX - rW / 2 && pX < rX + rW / 2 && pY > rY - rH / 2 && pY < rY + rH / 2
}
