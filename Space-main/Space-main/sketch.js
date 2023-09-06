var spaceShip = createSprite(50,200,10,10);
var obstacle1;
var background;
var bullet;

if (keyIsDown(UP_ARROW)){
    spaceShip.velocityY = -5;
}
if (keyIsDown(DOWN_ARROW)){
    spaceShip.velocityY = +5;
}
if (keyIsDown(RIGHT_ARROW)){
    spaceShip.velocityX = +5;
}
if (keyIsDown(LEFT_ARROW)){
    spaceShip.velocityX = -5;
}
if (keyIsDown(SPACE)){
    bullet = createSprite(spaceShip.x,spaceShip.y,10,3);
    if(bullet.collide(obstacle1)){
        obstacle1.
    }
}





function draw() {

    drawSprites();
}