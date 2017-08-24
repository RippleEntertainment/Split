var player = new Player();
var world = new World();

world.addObstacle(1, 30,50, 50, 50);
world.addObstacle(0, 180,350, 50, 50);
world.addObstacle(1, 160,280, 50, 50);
world.addObstacle(2, 320,130, 50, 50);

document.onkeydown = function(event){
    console.log(event.keyCode);
	switch(event.keyCode){
		//left
		case 65://a
        case 37://left
            world.moveWorld(1, player.speed);
			break;	
		//up
		case 87://w
		case 38://top
            world.moveWorld(2, player.speed);
			break;
		//right
		case 68://d
		case 39://right
            world.moveWorld(3, player.speed);
			break;
		//down
		case 83://s
		case 40: //down
            world.moveWorld(0, player.speed);
			break;
        case 32://spacebar
            console.log("Spacebar is pressed")
			break;
    }
}