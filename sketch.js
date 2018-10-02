/* Samantha Ho
Section E 
sch1@andrew.cmu.edu
Lab 06*/

var xarray = [];
var yarray = [];
var move = 2;


function setup() {
	createCanvas(400 , 400);
    noStroke();
	}

function draw() {
    background(15,55,50,50);
    stroke(200,220,220);
    for(var i = 0; i < xarray.length; i++){
        var x = xarray[i];
        var y = yarray [i];
        line (x,y + move, xarray[i-6], yarray[i-6] +move);
	 if(xarray.length >20 && yarray.length>20){
        xarray.shift();
         yarray.shift();
    }
     if(yarray.length < height){
         move +=.16;
     }

    }
   
}

function mouseDragged(){
    xarray.push(mouseX);
    yarray.push(mouseY);
    
    move = 0;
    
}

function mousePressed(){
    xarray = [];
    yarray = [];
}