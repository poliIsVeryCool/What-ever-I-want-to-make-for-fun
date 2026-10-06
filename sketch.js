// Project Title Stuff When I'm bored
// Your Name(s) You Mama
// Date  Oct 67

let money = 5
let slot1 = [1, 2, 3, 4, 5, 6, 7]
let slot2 = [1, 2, 3, 4, 5, 6, 7]
let slot3 = [1, 2, 3, 4, 5, 6, 7]
let slot1Spinning = false
let slot2Spinning = false
let slot3Spinning = false
let slot1Outcome = 6
let slot2Outcome = 6
let slot3Outcome = 6
let slotSpun = false
let timeCheck = 0
let smallWin = 10
let bigWin = 50

function setup() {
  createCanvas(400, 600);
  background(240);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(60);
  textAlign(CENTER, CENTER);
  textSize(30);
  stroke(0);
}

function draw() {
  background(0);
  drawSlotMachine(200, 300, 200, 300);
  winLose();
}

function drawSlotMachine(x, y, w, h) {
  fill("yellow");
  rect(x, y, w, h);
  fill(255);
  rect(x, y - h / 5, w, h / 2);
  slots(x, y - h / 5, w);
  startSlots(x, y, w, h);
}

function slots(x, y, w) {
  fill("red");
  textSize(40);
  text(slot1[slot1Outcome], x - w / 3, y);
  text(slot2[slot2Outcome], x, y);
  text(slot3[slot3Outcome], x + w / 3, y);
  textSize(30);
  fill(255);
}

function startSlots(x, y, w, h) {
  if(pointRectTouch(mouseX, mouseY, x, y, w, h) == true && mouseIsPressed == true && slotSpun == false) {
    timeCheck = frameCount;
    slot1Spinning = true;
    slot2Spinning = true;
    slot3Spinning = true;
    slotSpun = true;
  }
  if(slotSpun == true) {
    if(slot1Spinning == true) {
      slot1Outcome = random([0, 1, 2, 3, 4, 5, 6]);
    }
    if(slot2Spinning == true) {
      slot2Outcome = random([0, 1, 2, 3, 4, 5, 6]);
    }
    if(slot3Spinning == true) {
      slot3Outcome = random([0, 1, 2, 3, 4, 5, 6]);
    }
    if(frameCount > timeCheck + 30) {
      slot1Spinning = false;
    }
    if(frameCount > timeCheck + 60) {
      slot2Spinning = false;
    }
    if(frameCount > timeCheck + 90) {
      slot3Spinning = false;
      slotSpun = false;
    }
  }
}

function winLose() {
  if(slotSpun == false) {
    if(slot1Outcome == slot2Outcome && slot2Outcome == slot3Outcome) {
      fill("Yellow");
      text("You Won! $" + bigWin, 200, 100);
      fill(255);
    } else if(slot1Outcome == slot2Outcome || slot1Outcome == slot3Outcome || slot2Outcome == slot3Outcome) {
      fill("Green");
      text("You Won $" + smallWin, 200, 100);
      fill(255);
    } else {
      fill("Red");
      text("Bummer", 200, 100);
      fill(255);
    }
  }
}

function pointRectTouch(pX, pY, rX, rY, rW, rH) {
  return pX > rX - rW / 2 && pX < rX + rW / 2 && pY > rY - rH / 2 && pY < rY + rH / 2;
}
