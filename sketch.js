var n1, n2;
var box1, box2;
var b1;
var b2;

function setup() {
  createCanvas(400, 400);
  box1 = createInput();
  box1.position(20,50);
  
  box2 = createInput();
  box2.position(20,100);

  b1 = createButton("ADD");
  b1.position(20,150);
  b1.mousePressed(add);

  b2= createButton("SUB");
  b2.position(100,150);
  b2.mousePressed(sub)
}

function draw() {
  background(220);

  text("Enter first number", 20,40);
  text("Enter second number", 20,90)

}

function add(){
  n1 = parseInt(box1.value());
  n2 = parseInt(box2.value());
  console.log(n1+n2);
}

function sub(){
  n1 = parseInt(box1.value());
  n2 = parseInt(box2.value());
  console.log(n1-n2);
}








