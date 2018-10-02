/* Samantha Ho
Section E 
sch1@andrew.cmu.edu
Lab 06*/

var xarray = [];
var yarray = [];


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
        line (x,y, xarray[i-8], yarray[i-8]);
	}
}

function mouseDragged(){
    xarray.push(mouseX);
    yarray.push(mouseY);
    
}

function mousePressed(){
    xarray = [];
    yarray = [];
}