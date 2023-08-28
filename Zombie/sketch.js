let sandTexture;
let skyTexture;

function preload()
{
  sandTexture = loadImage("stylizedSand.jpg");
  skyTexture = loadImage("Wedding Day Blues.jpg");
}

function setup() 
{
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() 
{
  background(0,0,255);
  ambientLight(255);

  texture(skyTexture);
  createSphere(1000,0,0,0);

  //Ground
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
  rotateZ(rotZ);
  plane(s);
  pop();
}

function createSphere(s, x, y, z)
{
  push();
  translate(x, y, z);
  sphere(s);
  pop();
}
