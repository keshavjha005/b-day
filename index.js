var lastInput = "";

function clearOutput(){
var input = document.getElementById("input");
var output = document.getElementById("output");
var lastRow = null;

if(input){
var len = output.innerHTML.split("<br>").length;
lastRow = output.innerHTML.split("<br>")[len-1].split("<")[0];
}

output.innerHTML = "";

if(input){
output.innerHTML = lastRow;
output.appendChild(input);
input.focus();
}
}
/*
    
             
*/

function outf(text) {
var mypre = document.getElementById("output"); 
mypre.innerHTML = mypre.innerHTML + text; 
} 

function inputf(prompt) {
return new Promise(function(resolve,reject){

$("#output").append("<input id='input' value='"+lastInput+"' placeholder='value:' />");
$("#input").focus().select();

$("#input").on("keyup",function(e){
if (e.keyCode == 13) {
$("#input").off("keyup");
lastInput = $("#input").val();
resolve($("#input").val());

$("#output").append($("#input").val() + "<br />");
$("#input").remove();
}
});
});
}

function builtinRead(x) {
if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
throw "File not found: '" + x + "'";
return Sk.builtinFiles["files"][x];
}
function runit() {
var prog = document.getElementById("yourcode").value; 
var mypre = document.getElementById("output"); 
mypre.innerHTML = ''; 
Sk.pre = "output";
Sk.configure({

inputfun: inputf,
inputfunTakesPrompt: true,
output:outf,
read:builtinRead
}); 
(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
var myPromise = Sk.misceval.asyncToPromise(function() {
return Sk.importMainWithBody("<stdin>", false, prog, true);
});
myPromise.then(function(mod) {
},
function(err) {
console.log(err.toString());
});
}

window.onload = runit;

var cnv;

class Trail {
    constructor(parent){
        this.pos = parent.pos.copy();
        this.v = p5.Vector.fromAngle(random(PI,TWO_PI)).mult(random(5));
        this.c = parent.c;
        this.life = 255;
    }
    update(){
        this.v.y += 9.8/60;
        this.pos.add(this.v);
        
        stroke(this.c,this.life);
        point(this.pos.x,this.pos.y);
        
        this.life -= 0.3;
        
        if (this.life < 0){
            
        }
    }
}

class Firework {
    constructor(){
        this.pos = createVector(random(width),height);
        this.v = createVector(0,random(maxVel,maxVel/2));
        this.c = randomColor();
        this.falling = 0;
        
        this.explosion = [];
    }
    
    update(){
        
        this.v.y += 9.8/60;
        this.pos.add(this.v);
        if (!this.falling){
            
        
            stroke(this.c);
            point(this.pos.x,this.pos.y);
            
            if (this.v.y > 0){
                for (let i=0; i<random(10,40); i++){
                    this.explosion.push(new Trail(this));
                }
                this.falling = 1;
            } 
        } else {
            for (let i=0; i<this.explosion.length; i++){
                this.explosion[i].update();
                if (this.explosion[i].pos.y > height){
                    this.explosion.splice(i,1);
                }
            }
            if (!this.explosion.length){
                this.pos = createVector(random(width),height);
                this.v = createVector(0,random(maxVel,maxVel/2));
                this.c = randomColor();
                this.falling = 0;
                
                this.explosion = [];
            }
        }
        
    }
}

function randomColor(){
    return color(random(255),random(255),random(255));
}


function setup(){
    frameRate(60);
    if (displayWidth > displayHeight) {
        cnv = createCanvas(500, 500, P2D);
    } else {
        cnv = createCanvas(displayWidth*0.95,displayWidth*0.95, P2D);
    }
    cnv.parent("cnv");
    textAlign(CENTER);
    textSize(height/8);
    textFont("Georgia");
    
    strokeWeight(3);
    
    grav = 9.8;
    maxVel = -Math.sqrt(2*(grav/60)*height);
    
    num = 10;
    
    fireworks = [];
    for (let i=0; i<num; i++){
        fireworks.push(new Firework());
    }
}


function draw(){
    background(0,10);
    
    
    for (let i=0; i<fireworks.length; i++){
        fireworks[i].update();
    }
    
    
    stroke(255);
    fill(255);
    
    
}


alert("Happy birthday REEMA . Sorry this came late  but I hope this will give you happiness . XD ✌🏾✌🏾🤣🤣")







