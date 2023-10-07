let axiom = "FX";
let sentence = axiom;
let len = 100;
let angle;

let rules = [];
rules[0] = {
  a: "F",
  b: "FF-[-F+FF]+[+F-FF]"
}


function generate() {
  let nextSentence = "";
  len *= 0.6;
  for (let i=0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    let found = false;
    for (let j = 0; j < rules.length; j++){
      if(current == rules[j].a) {
          nextSentence += rules[j].b; 
          found = true;
          break;   
      }
      if (!found){
        nextSentence += current;
      }
    }
  }
  sentence = nextSentence;
  // Aggiungi l'autoclick del mouse ogni 5 secondi
  setTimeout(() => mousePressed(), 5000);
}

function turtle() {
  background(255,255,255);
  stroke(28,104,0);
  resetMatrix();
  translate(windowWidth/2, windowHeight);
  for (let i=0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    if (current == "F") {
    //if (current == "F"){
      line(0,0,0, -len);
      translate(0, -len);
    }
    else if (current == "X"){
      translate(0, -len);
    }
    else if (current == "+"){
        rotate(angle);
    }
    else if (current == "-") {
      rotate(-angle);
    }
    else if (current == "[") {
      push();
    }
    else if (current == "]") {
      pop();
    }
  }
}
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51,47,60);
  turtle();
  angle = radians(23);
  // put setup code here
}


function draw() {
  turtle();
}



let counter = 0;
function mousePressed() {
  counter++;
  if(counter < 7){
    generate();
  }
 
}
