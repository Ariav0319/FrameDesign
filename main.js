function preload() { } 
function setup() {
  createCanvas(500,500);
}

function draw() {
  //circle1
  let c = color(255,182,193);
fill(c);
noStroke();
circle(39, 39, 75);
  //circle2
  circle(460, 39, 75);
  //circle3
  circle(460, 463, 75);
  //circle4
  circle(39, 463, 75);
  //rect1
  rect(77, 20, 345, 35, 5);
  //rect2
  rect(77, 445, 345, 35, 5);
  //rect3
  rect(22, 75, 35, 350, 5);
  //rect4
  rect(443, 75, 35, 350, 5);
}