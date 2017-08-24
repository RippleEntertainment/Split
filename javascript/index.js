function Game(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Testing the world created
    
    world.update();

    world.draw();
    player.draw();
}
    
setInterval(Game, 30);