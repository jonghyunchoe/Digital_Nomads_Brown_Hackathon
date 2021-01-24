/* global createCanvas, WEBGL, background, push, pop, box, rotateZ, 
rotateX, rotateY, frameCount, perspective, PI, width, height, orbitControl, 
normalMaterial, translate, cone, color, stroke,
position, rect, displayWidth, displayHeight, windowWidth,
windowHeight, sqrt, angleMode, DEGREES, tan, createVector, loadImage
triangle, lights, noStroke, fill, sphere, plane, shininess, scale,
strokeWeight, cylinder, rotate, ellipsoid, texture, createEasyCam, createButton, specularMaterial, ambientLight*/
let sky, gray, mustard, red, orange, grass, black, tower, img, button1;
var button2, button3, button4;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage(
    "https://cdn.glitch.com/6b547f2e-d7dd-45da-9d6f-c6886aaed8e4%2Fpyramid-seamless-texture-limestone-wall-looped-pattern-d-modeling-egyptian-ancient-architecture-184089312.jpg?v=1611457679228"
  );

  button1 = createButton("To the Egyptian Pyramids");
  button1.position(49, 19);
  button1.style("background-color", "white");
  // button1.style('font-size', '12px');
  button1.mousePressed(pyramidWindow);

  button2 = createButton("To Netherland's Tulip Fields");
  button2.position(windowWidth - 180, windowHeight - 39);
  button2.style("background-color", "white");
  // button2.style('font-size', '12px');
  button2.mousePressed(gardenWindow);

  button3 = createButton("To the Tower of Pisa");
  button3.position(windowWidth - 140, 19);
  button3.style("background-color", "white");
  // button3.style('font-size', '24px');
  button3.mousePressed(pisaWindow);

  button4 = createButton("To the Kaaba");
  button4.position(49, windowHeight - 39);
  button4.style("background-color", "white");
  // button4.style('font-size', '24px');
  button4.mousePressed(kaabaWindow);
}

function pyramidWindow() {
  window.open(
    "https://www.google.com/maps/@29.9792345,31.1342019,3a,75y,253.72h,112.83t/data=!3m8!1e1!3m6!1sAF1QipNlTFyf4D_a8Dm6mdeYK6nNtSEZqXDsrZtgMby8!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNlTFyf4D_a8Dm6mdeYK6nNtSEZqXDsrZtgMby8%3Dw203-h100-k-no-pi-0-ya134.61446-ro-0-fo100!7i10240!8i5120"
  );
}

function kaabaWindow() {
  window.open(
    "https://www.google.com/maps/@21.4227333,39.8264867,3a,75y,297.07h,86.21t/data=!3m8!1e1!3m6!1sAF1QipNt3qFLjaZGdoPeheM8PMi4abU_Jo60SGQkvLzF!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNt3qFLjaZGdoPeheM8PMi4abU_Jo60SGQkvLzF%3Dw203-h100-k-no-pi-0-ya240.10768-ro0-fo100!7i6080!8i3040"
  );
}

function gardenWindow() {
  window.open(
    "https://www.google.com/maps/@52.267625,4.548755,3a,90y,63.7h,92.15t/data=!3m7!1e1!3m5!1sAF1QipOZdsChSmdkXYvSi8cFjtZRR_jgGmgRpSOTwGs0!2e10!3e11!7i2508!8i1254"
  );
}

function pisaWindow() {
  window.open(
    "https://www.google.com/maps/@43.7236097,10.3967859,3a,75y,194.8h,97.4t/data=!3m7!1e1!3m5!1sfD3S431e2Pu8domfIs5t8A!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DfD3S431e2Pu8domfIs5t8A%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D197.37209%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656"
  );
}

function draw() {
  sky = "#69CEEC";
  background(sky);
  orbitControl();
  //lights();

  scale(1.2);

  push();
  noStroke();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  gray = "#5d5d5d";
  fill(gray);
  box(350, 350, 100, 200, 200);

  //Quad 1
  fill("white");
  translate(-80, -80, 55);
  plane(120);

  //Quad 2
  fill("white");
  translate(160, 0, 0);
  plane(120);

  //Quad 3
  fill("white");
  translate(0, 160, 0);
  plane(120);

  //Quad 4
  fill("white");
  translate(-160, 0, 0);
  plane(120);

  //road between q1 and q4
  mustard = "#FFE100";
  fill(mustard);
  translate(-50, -80, 0);
  plane(10, 3);
  for (let i = 0; i < 3; i++) {
    translate(25, 0, 0);
    plane(10, 3);
  }

  //crosswalk between q1 and q4
  fill("white");
  translate(23, -15, 0);
  plane(25, 4);
  for (let i = 0; i < 5; i++) {
    translate(0, 6, 0);
    plane(25, 4);
  }
  //crosswalk between q2 and q3
  translate(65, 0, 0);
  plane(25, 4);
  for (let i = 0; i < 5; i++) {
    translate(0, -6, 0);
    plane(25, 4);
  }

  //road between q2 and q3
  fill(mustard);
  translate(25, 15, 0);
  plane(10, 3);
  for (let i = 0; i < 3; i++) {
    translate(25, 0, 0);
    plane(10, 3);
  }

  //road between q1 and q2
  translate(-134, -130, 0);
  plane(3, 10);
  for (let i = 0; i < 3; i++) {
    translate(0, 25, 0);
    plane(3, 10);
  }

  //crosswalk between q1 and q2
  fill("white");
  translate(-14, 23, 0);
  plane(4, 25);
  for (let i = 0; i < 5; i++) {
    translate(6, 0, 0);
    plane(4, 25);
  }

  //crosswalk between q3 and q4
  translate(0, 65, 0);
  plane(4, 25);
  for (let i = 0; i < 5; i++) {
    translate(-6, 0, 0);
    plane(4, 25);
  }

  //road between q3 and q4
  fill(mustard);
  translate(14, 23, 0);
  plane(3, 10);
  for (let i = 0; i < 3; i++) {
    translate(0, 25, 0);
    plane(3, 10);
  }

  pop();

  // tree
  push();
  noStroke();
  translate(80, 40, 56);
  grass = color(144, 238, 144);
  fill(grass);
  plane(100, 20);
  push();
  translate(0, 80, 0);
  plane(100, 20);
  translate(0, -80, 0);
  rotateZ(PI / 2);
  translate(40, -40, 0);
  plane(100, 20);
  translate(0, 80, 0);
  plane(100, 20);

  // middle field

  pop();

  push();
  fill("white");
  box(30, 25, 0.5);
  fill("#ffedb8");
  translate(0, 5, 0);
  box(20, 32.5, 1);
  translate(0, 35, 0);
  box(45, 45, 0);
  pop();
  // plane(30);

  translate(-30, 3, 15);
  tree();
  // for (let i = 0; i < 3; i++) {
  //   noStroke();
  //   translate(25, 0, 0);
  //   // tree();
  // }
  translate(75, 0, 0);
  tree();
  push();
  translate(0, 75, 0);
  // for (let i=0; i<2; i++) {
  //   translate(-25, 0, 0);
  //   tree();
  // }
  translate(-75, 0, 0);
  tree();
  pop();

  push();
  // for (let i=0; i<3; i++) {
  //   noStroke();
  //   translate(0, 25, 0);
  //   tree();
  // }
  translate(0, 75, 0);
  tree();
  translate(-75, 25, 0);
  // for (let i=0; i<3; i++) {
  //   noStroke();
  //   translate(0, -25, 0);
  //   tree();
  // }
  // translate(0, -75, 0);
  // tree();
  pop();

  // fill("#ffd1dc");
  // translate(-45, -12, -20);
  // box(105, 5, 10);
  // translate(0, 24, 0);
  // box(105, 5, 10);
  // translate(-50, -12, 0);
  // box(5, 25, 10);
  // translate(100, 0, 0);
  // box(5, 25, 10);
  pop();

  //pyramid
  push();
  texture(img);
  //noStroke();
  scale(0.5);
  translate(-160, -150, 100);
  pyramid(200);
  pop();

  // kaaba
  push();
  translate(-80, 80, 70);
  scale(0.7);
  kaaba3();
  pop();

  // towerofpisa
  push();
  translate(230, -225, -30);
  scale(0.7);
  tower = towerofpisa();
  // tower.mouseClicked(window.open([Link to the Google Maps]));
  // tower.mouseClicked(console.log("Working"));
  // tower.mouseClicked(window.open('https://www.google.com/maps/@43.7224528,10.3963897,3a,75y,20.18h,116.87t/data=!3m7!1e1!3m5!1s7saqquFOmCQssnPNEPCJfg!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3D7saqquFOmCQssnPNEPCJfg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D14.874018%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656'));
  pop();

  //   push();
  //   translate(230, -225, -30);
  //   scale(0.7);
  //   towerofpisa();
  //   pop();

  // ground
  push();
  noStroke();
  translate(230, -225, -20);
  fill("#ffedb8");
  plane(130);
  pop();

  push();
  noStroke();
  translate(0, -225, -20);
  fill("#ffedb8");
  plane(130);
  pop();

  push();
  noStroke();
  translate(0, 0, -20);
  fill("#ffedb8");
  plane(130);
  pop();

  // fill(grass);
  // translate(40, 40, 0);
  // plane(30);
  // translate(-80, 0, 0);
  // plane(30);
  // translate(0, -80, 0);
  // plane(30);
  // translate(80, 0, 0);
  // plane(30);

  push();
  translate(20, -100, -20);
  car("blue");
  pop();

  push();
  translate(220, -125, -20);
  car("red");
  pop();

  push();
  rotateZ(PI / 2);
  translate(-250, -100, -20);
  car("green");
  pop();

  //flowers
  // translate(100, 0, 0);
  flowerRow(180);
  flowerRow(175);
  flowerRow(170);
  flowerRow(165);

  flowerRow(275);
  flowerRow(280);
  flowerRow(285);
  flowerRow(290);

  rotateZ(PI / 2);
  translate(0, -225, 0);
  flowerRow(50);
  flowerRow(55);
  flowerRow(60);
  flowerRow(65);

  /*
  //red building
  push();
  noStroke();
  red = color(204, 0, 0);
  translate(120, -120, 105);
  fill(red);
  box(30, 30, 100);
  translate(-30, 0, -25);
  fill(red);
  box(30, 30, 90);
  translate(-30, 0, -25);
  fill(red);
  box(30, 30, 80);
  translate(30, 30, 25);
  fill(red);
  box(30, 30, 90);
  translate(30, 0, 0);
  fill(red);
  box(30, 30, 90);

  // blue building
  push();
  rotateX((3 * PI) / 2);
  translate(-30, -20, 200);
  fill("#ecdee9");
  box(40, 90, 40);
  fill("#2cc4df");
  translate(-20, 0, 20);
  box(10, 90, 10);
  translate(40, 0, 0);
  box(10, 90, 10);
  translate(0, 0, -40);
  box(10, 90, 10);
  translate(-40, 0, 0);
  box(10, 90, 10);
  translate(-5, 0, -5);
  translate(25, -50, 0);
  box(60, 10, 10);
  translate(0, 0, 50);
  box(60, 10, 10);
  translate(-25, 0, -25);
  box(10, 10, 60);
  translate(50, 0, 0);
  box(10, 10, 60);
  translate(0, 10, 0);
  pop();

  //yellow building
  push();
  translate(-200, 170, -20);
  sphere(20);
  pop();
  */
}

function tree() {
  push();
  scale(0.8);
  translate(-10, 0, 0);
  rotateX(PI / 2);
  fill("#007d01");
  cone(10, 17.5);
  translate(0, 6.25, 0);
  fill("#5e9307");
  cone(9, 17.5);
  translate(0, -17.5, 0);
  fill("#783925");
  box(5, 6.25, 5);
  pop();
}

function kaaba1() {
  black = color(25, 25, 25);
  translate(45, 45, 32);
  fill(black);
  box(10, 10, 5);

  translate(-22, 0, 0);
  fill("#FFD700");
  box(35, 10, 5);

  translate(-23, 0, 0);
  fill(black);
  box(10, 10, 5);

  translate(-22, 0, 0);
  fill("#FFD700");
  box(35, 10, 5);

  translate(-23, 0, 0);
  fill(black);
  box(10, 10, 5);
}

function kaaba2() {
  fill("#FFD700");
  box(10, 35, 5);

  translate(0, -23, 0);
  fill(black);
  box(10, 10, 5);

  translate(0, -22, 0);
  fill("#FFD700");
  box(10, 35, 5);
}

function kaaba3() {
  push();
  noStroke();

  black = color(25, 25, 25);
  fill(black);
  box(100, 100, 60);

  kaaba1();
  translate(45, -135, -32);
  kaaba1();
  translate(0, 67.5, 0);
  kaaba2();
  translate(90, 45, 0);
  kaaba2();

  translate(-45, 22.5, 7);
  fill(black);
  box(100, 100, 10);
  fill("#FFD700");
  shininess(1);
  translate(0, 0, 10);
  box(100, 100, 10);
  fill(black);
  translate(0, 0, 12);
  box(100, 100, 15);
}

function pyramid(h) {
  let radius = (sqrt(5) / 2) * h;
  lights();
  push();
  noStroke();
  //stroke('#a76832');
  //strokeWeight(1);
  fill("#E2AB68");
  texture(img);
  rotateX(PI / 2);
  rotateY(PI / 4);
  cone(radius, h, 4);
  translate(0, h);
  pop();
}

function towerofpisa() {
  noStroke();
  rotateX((3 * PI) / 2);
  push();
  rotateZ(PI / 45);
  for (let i = 0; i < 6; i++) {
    translate(0, -40, 0);
    push();
    fill("#f3f0db");
    cylinder(40, 10);
    translate(20, 20, 0);
    translate(5, 0, 8);
    for (let i = 0; i < 12; i++) {
      translate(0, 0, -15);
      rotateY(PI / 6);
      push();
      translate(0, -10, 0);
      fill("#d1cec2");
      box(10, 5, 10);
      translate(0, 5, 0);
      fill("#ccbd9e");
      cylinder(3.5, 40);
      pop();
    }
    pop();
  }
  translate(0, -10, 0);
  fill("#e6dfcd");
  cylinder(20, 20);
  fill("#b5ae9b");
  cylinder(10, 20);
  pop();
}

function car(color) {
  push();
  scale(0.5);
  noStroke();
  rotateX((3 * PI) / 2);
  fill(color);
  box(100, 20, 50);
  translate(0, -20, 0);
  box(50, 20, 50);

  // windows
  fill("black");
  box(50, 15, 40);
  fill("black");
  translate(12, 0, 0);
  box(20, 15, 50);
  translate(-24, 0, 0);
  box(20, 15, 50);

  push();
  translate(48, 20, 0);
  fill("#fafafa");
  box(30, 10, 29);
  translate(0, 0, 20);
  push();
  translate(11, 0, 0);
  rotateZ(PI / 2);
  cylinder(4, 6);
  translate(0, 0, -40);
  cylinder(4, 6);
  translate(0, 95, 0);
  cylinder(4, 6);
  translate(0, 0, 40);
  cylinder(4, 6);
  pop();
  translate(0, 0, -20);
  translate(-82, 0, 0);
  box(10, 10, 29);

  pop();

  // wheels
  translate(10, 20, 0);
  translate(20, 5, 20);
  rotateX(PI / 2);
  fill("grey");
  cylinder(10, 10);
  fill("#f7f7f6");
  cylinder(5, 10);
  translate(-40, 0, 0);
  fill("grey");
  cylinder(10, 10);
  fill("#f7f7f6");
  cylinder(5, 10);
  translate(0, -40, 0);
  fill("grey");
  cylinder(10, 10);
  fill("#f7f7f6");
  cylinder(5, 10);
  translate(40, 0, 0);
  fill("grey");
  cylinder(10, 10);
  fill("#f7f7f6");
  cylinder(5, 10);
  pop();
}

function stem() {
  push();
  noStroke();
  fill("green");
  cylinder(10, 100);
  translate(13, -20, 0);
  rotate(100);
  fill("green");
  ellipsoid(10, 30, 10);
  pop();
}

function flower(c) {
  push();
  noStroke();
  scale(0.05);
  rotateX(PI / 2);
  fill(c);
  sphere(40);
  translate(0, -45, 0);
  stem();
  translate(0, -45, 0);
  pop();
}

function flowerPlace(x, y, c) {
  push();
  translate(x, y, -15);
  flower(c);
  pop();
}

function flowerRow(x) {
  flowerPlace(x, -45, "pink");
  flowerPlace(x, -40, "yellow");
  flowerPlace(x, -35, "pink");
  flowerPlace(x, -30, "red");
  flowerPlace(x, -25, "white");
  flowerPlace(x, -20, "orange");
  flowerPlace(x, -15, "pink");
  flowerPlace(x, -10, "white");
  flowerPlace(x, -5, "yellow");
  flowerPlace(x, 0, "red");
  flowerPlace(x, 5, "white");
  flowerPlace(x, 10, "pink");
  flowerPlace(x, 15, "orange");
  flowerPlace(x, 20, "red");
  flowerPlace(x, 25, "white");
  flowerPlace(x, 30, "pink");
  flowerPlace(x, 35, "yellow");
  flowerPlace(x, 40, "red");
}
