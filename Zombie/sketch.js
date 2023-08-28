let sandTexture;
let skyTexture;

xPos = 0;
yPos = 0;
zPos = 0;
xFocus = 0;
yFocus = 0;
zFocus = 1;
speed = 3;
rotSpeed = 1;
vinkel = 90;
vinkelOp = 0;

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

  //Camera
  camera(xPos, yPos, zPos, //Position
         xPos + xFocus, yPos + yFocus, zPos + zFocus, //Focuspoint
         0, 1, 0); //UpVector

  //Sky
  texture(skyTexture);
  createSphere(1000,0,0,0);

  //Ground
  noStroke(); 
  texture(sandTexture);
  createPlane(1000, 0, 100, 0, 90, 0, 0);

  //Camera rotation
  if(keyIsDown(RIGHT_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    vinkel += rotSpeed;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    vinkel -= rotSpeed;
  }
  if(keyIsDown(UP_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    yFocus = sin(vinkelOp);
    vinkelOp -= rotSpeed;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    yFocus = sin(vinkelOp);
    vinkelOp += rotSpeed;
  }
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
