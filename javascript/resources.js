//---------------------------------------------BASE CODE-----------------------------------
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Player(){
	this.width = 50;
	this.height = 50;
	this.xposition = (canvas.width)/2;
	this.yposition = (canvas.height)/2;
	this.direction = 0;//0 down, 1 left, 2 up, 3 right
	this.speed = 10;

	this.update = function(){
		//for interpolation or animation, if possible
	}
	this.draw = function(){
		context.fillStyle = "#ffffff";
		context.fillRect(this.xposition - (this.width/2), this.yposition - (this.height/2), this.width, this.height);
	}
	this.setDirection = function(input){
		if(input >= 0 && input <= 4)
			this.direction = input;
	}
}

function World(){
	this.xposition = 0;
	this.yposition = 0;
	this.obstacles = [];

	//updates most of the variables inside world based on changes of the player
	this.update = function(){
		for(var ob of this.obstacles){
			ob.update(this.xposition, this.yposition);
		}
	}

	this.draw = function(){
		//background
		context.fillStyle = "#000000";
		context.fillRect( this.xposition, this.yposition, canvas.width, canvas.height);
		//other stuff
		for(var ob of this.obstacles){
			ob.draw();
		}
	}
	this.moveWorld = function(value,speed){
		console.log("Moving", value);
		switch(value){//the movement is 
			case 0://up
				this.yposition-=speed;
				break;
			case 1://right
				this.xposition+=speed;
				break;
			case 2://down
				this.yposition+=speed;
				break;	
			case 3://left
				this.xposition-=speed;
				break;
			default://switch map
		}
	}
	this.addObstacle = function(type, x, y, w, h){
		this.obstacles.push(new Obstacle(type, x, y, w, h));
	}
}

function Obstacle(type, x, y, w, h){
	this.UItype = type;
	this.xWorldPosition = 0;
	this.yWorldPosition = 0;
	this.xposition = x;//world dependent, will not update based on player position
	this.yposition = y;//world dependent, will not update based on player position
	this.width = w;
	this.height = h;

	//updates the position of the obstacle based on the position of the world
	this.update = function(x,y){
		this.xWorldPosition = x;
		this.yWorldPosition = y;
	}

	this.draw = function(){
		switch(this.UItype){
			case 0://box obstacle
				context.fillStyle = "#c77";
				break;
			case 1://flower obstacle
				context.fillStyle = "#7c7";
				break;
			case 2://trash tile
				context.fillStyle = "#77c";
				break;
			default://invisible obstacle
				context.fillStyle = "#ccc";
		}
		context.fillRect(this.xWorldPosition + this.xposition - (this.width/2), this.yWorldPosition + this.yposition - (this.height/2), this.width, this.height);
	}
}