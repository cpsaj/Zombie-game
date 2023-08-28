let sandTexture;

function preload()
{
  sandTexture = loadImage("stylizedSand.jpg");
}

function setup() 
{
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);

  // let sky = drawingContext.createLinearGradient(width/2,height,width/2,-height);
  // sky.addColorStop(0, color(255,0,0,255));
  // sky.addColorStop(1, color(255,255,0,255));
}

function draw() 
{
  // drawingContext.fillStyle = sky;
  background(0,0,255);
  ambientLight(255);
  noStroke(); 
  texture(sandTexture);
  createPlane(1000, 0, 100, 0, 90, 0, 0);
}

function createPlane(s, x, y, z, rotX, rotY, rotZ)
{
  push();
  translate(x, y, z);
  rotateX(rotX);
  rotateY(rotY);
  rotateZ(rotZ)
  plane(s);
  pop();
}
