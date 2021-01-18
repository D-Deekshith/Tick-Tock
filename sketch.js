function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
}

function draw() {
    background("black"); 
    translate(200,200);
    rotate(-90);

    var hr = hour();
    var mn = minute();
    var sc = second();

    strokeWeight(10);
    stroke(244, 4, 0);
    noFill();
    var secondAngle = map(sc,0,60,0,360);
    arc(0,0,390,390,0,secondAngle);

    stroke(15, 245, 4);
    var minuteAngle = map(mn,0,60,0,360);
    arc(0,0,370,370,0,minuteAngle);

    stroke(13, 0, 227);
    var hourAngle = map(hr%12,0,12,0,360);
    arc(0,0,350,350,0,hourAngle);

    push();
    rotate(secondAngle);
    stroke(244, 4, 0);
    line(0,0,165,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(15, 245, 4);
    line(0,0,125,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(13, 0, 227);
    line(0,0,85,0);
    pop();

    strokeWeight(5)
    stroke(255);
    point(0,0)


    drawSprites();
}