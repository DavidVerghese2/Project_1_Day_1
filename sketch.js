// I want to create a repetitive, geometric pattern (sort of like a mandala)
// based on this character's face: 
//https://www.google.com/search?q=mordecai&rlz=1C5CHFA_enUS708US708&espv=2&biw=1280&bih=689&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj3kYqT87TPAhXE1B4KHfgqAKIQ_AUIBigB#tbm=isch&q=mordecai+face&imgrc=xMAhj6bXvzf9rM%3A

// I plan on using the same methods as in Exercise 2 to recreate Mordecai's face

function setup() {
  createCanvas(215*4, 225*4);
  background(255);
}

function draw() {
head();
push();
translate(200, 0);
head();
pop();
push();
translate(00, 200);
head();
pop();

}

function head(){
 fill(143, 162, 210);
 ellipse (300, 400, 500, 500);
 nose();
 eyes();
 mouth();
}

function nose(){
  fill(34, 29, 53);
  ellipse(300, 450, 50, 50);
}

function eyes(){
  fill(255);
  ellipse(250, 400, 100, 100);
  ellipse(350, 400, 100, 100);
  
  fill(0);
  ellipse(250, 400, 30, 30);
  ellipse(350, 400, 30, 30);
}

function mouth(){
  beginShape();
//  vertex(300, 500 );
 // vertex(370, 470);
   vertex(300, 500 );
    vertex(370, 470);
  vertex(340 ,500 );
  endShape();
}