let enemy;
class Boat{
	
	/*
		creates character
	*/
	
	constructor(){
		/*
			somebody get this man a shield
		*/
		this.x = width/2;
		this.y = height/2;
		this.w = 50;
		this.health = 100;
		this.moving = false;
		this.up = false;
		this.down = false;
		this.right = false;
		this.left = false;
		this.lastFace = 'right';
		this.hitEnemy = false;
		this.takenDamage = null;
		this.hasMoved = false;
		//this.face = 0;
		this.characterLeft = loadImage('assets/'+choice+'Left.png');
		this.characterRight = loadImage('assets/'+choice+'Right.png');

	}
	show(){
		
		/*
			shows the damn thing
		*/

		rectMode(CENTER);
		strokeWeight(4);
		stroke(255);
		noFill();
		rect(this.x, this.y, this.w, this.w);
		if(this.lastFace == 'left'){
			image(this.characterLeft, this.x-(this.characterLeft.width/2), this.y-(this.characterLeft.height/2));
		}else if(this.lastFace == 'right'){
			image(this.characterRight, this.x-(this.characterRight.width/2), this.y-(this.characterRight.height/2));
		}

		/*
			shows health bar
		*/
		rectMode(CORNER);
		strokeWeight(3);
		fill(0, 255, 0);
		rect(this.x-(this.w/2), this.y+this.w, constrain(map(this.health, 0, 100, 0, 50), 0, 100), 10)
	}
	update(){
		
		/*
			movement logic
		*/

		if(this.moving){
			if(this.up && this.y>0){
				this.y-=4;
			}if(this.down && (this.y+this.w)<windowHeight){
				this.y+=4;
			}if(this.left && this.x>0){
				this.x-=4;
			}if(this.right && (this.x+this.w)<windowWidth){
				this.x+=4;
			}else{
				//uwu nothing to do here
			}
		}
	}
}
class BOI{
	constructor(index){
		
		/*
			creates Enemy nerd
		*/

		this.x = random(50, width-50);
		this.y = random(50, height-50);
		this.w = 70;
		this.index = index;
		this.gremlin = loadImage("assets/gremlin.png");
	}
	show(){
		
		/*
			enemy spotted!
		*/

		stroke(255);
		strokeWeight(4);
		noFill();
		//fill(255, 0, 0);
		ellipse(this.x, this.y, this.w, this.w);
		// this.x+=random(-10, 10);
		// this.y+=random(-10, 10);
		//textSize(18);
		//textAlign(CENTER);
		//text(this.index, this.x, this.y);
		image(this.gremlin, this.x-(this.gremlin.width)/2, this.y-(this.gremlin.height)/2);
		if(this.index!=reeeeee.length-1){
			this.checkBuddy(reeeeee[this.index+1]);
		}
		if(this.x>boat.x){
			this.x-=Level;
		}else{
			this.x+=Level;
		}if(this.y>boat.y){
			this.y-=Level;
		}else{
			this.y+=Level;
		}
		if(this.index!=reeeeee.length-1){
			this.checkBuddy(reeeeee[this.index+1]);
		}
	}
	checkBuddy(partner){
		let nudge = dist(this.x, this.y, partner.x, partner.y);
		if(nudge<=70){
			//console.log(this.x-partner.x, this.y-partner.y);
			if(this.x>partner.x){
				this.x+=70-(Math.sqrt(pow(this.x, 2)-pow(partner.x, 2)));
			}else{
				this.x-=70-(Math.sqrt(pow(partner.x, 2)-pow(this.x, 2)));
			}if(this.y>partner.y){
				this.y+=70-(Math.sqrt(pow(this.y, 2)-pow(partner.y, 2)));
			}else{
				this.y-=70-(Math.sqrt(pow(partner.x, 2)-pow(this.x, 2)));
			}
		}
	}
}
class EGG{
	constructor(){
		
		/*          *******
			creates * EGG *
		            *******
		*/
		
		this.x = random(50, width-50);
		this.y = random(50, height-50);
		this.width = 40;
		this.height = 60;
		this.getten = false;
		this.eggPhoto = loadImage('assets/Dragon Egg transparent.png');
		this.uwu = loadSound('assets/Collect Egg.wav');
		this.hasUWUed = false;
	}
	show(){
		// stroke(255, 255, 0);
		// strokeWeight(4);
		// fill(255);
		// ellipse(this.x, this.y, this.width, this.height);
		// console.log(this.eggPhoto.x);
		image(this.eggPhoto, (this.x-(this.eggPhoto.width)/2), (this.y-(this.eggPhoto.height)/2));
	}
}