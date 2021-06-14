var canvas= document.getElementById("circles");
ctx= canvas.getContext("2d");
function circle (x,y, color){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= 3;
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();
}
circle(100, 200, "blue");
circle(150, 250, "yellow");
circle(200, 200, "black");
circle(250, 250, "green");
circle(300, 200, "red");
