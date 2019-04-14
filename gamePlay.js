var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var endGame = false;
function newLevel(){
	boat = new Boat();
	//console.log("yeet");
    //nerd = new BOI();
    EGGS = [];
    reeeeee = [];
	for(let i = 0; i<10; i++){
		let egg = new EGG();
		EGGS.push(egg);
    }
    //console.log(EGGS);
	for(let i = 0; i<10; i++){
		let enemy = new BOI(i);
		reeeeee.push(enemy);
	}
}
function congradulations(){
    if(x.isPlaying()){
        x.stop();
    }
    bigOof.play();
    textSize(128);
    fill(0, 255, 0);
    textAlign(CENTER);
    text("Congradulations!", width/2, height/2);
    text("Score: "+str(Level*100-(100-boat.health)), width/2, (height/2)+150);
}

function gamePlay(){
    /*
		Lets get this bread
	*/
	background(0, 0, 255);
	for(let i = 0; i<EGGS.length; i++){
		collisionLogic(EGGS);
		if (!EGGS[i].getten){
			EGGS[i].show();
		}
	}
	for(let i = 0; i<reeeeee.length; i++){
		reeeeee[i].show();
	}
	boat.show();
    boat.update();
	if(enemyHit(boat.takenDamage, boat.hasMoved)){
        death.play();
        //console.log("hit enemy");
		boat.health -= 10;
		this.takenDamage = true;
		if(boat.health==0){
			endGame = true;
		}
    }
    textSize(24);
    fill(255);
    text("Level "+str(Level), 30, 30);
	if(endGame){
		gameOver();
    }
        

    function collisionLogic(entityList){
        for(let i = 0; i<entityList.length; i++){
            let collide = dist(boat.x, boat.y, entityList[i].x, entityList[i].y)<(boat.w/2);
            if(collide){
                if(entityList[i].getten != null){
                    entityList[i].getten = true;
                    let createNewLevel = true;
                    if(!entityList[i].hasUWUed){
                        entityList[i].uwu.play();
                        //console.log(entityList[i].hasUWUed);
                        entityList[i].hasUWUed = true;
                    }
                    for(let i = 0; i<entityList.length; i++){
                        if (!entityList[i].hasUWUed){
                            //console.log(entityList[i].hasUWUed);
                            createNewLevel = false;
                        }
                    }
                    if(createNewLevel && Level==3){
                        congradulations();
                        hasDied = true;
                        noLoop();
                    }else if(createNewLevel){
                        newLevel();
                        Level++;
                    }
                }
                return true;
            }
        }return false;
    }
    function enemyHit(takenDamage, hasMoved){
        let gottem = collisionLogic(reeeeee);
        if(gottem && !takenDamage){
            boat.hitEnemy = true;
            boat.takenDamage = true;
            return true;
        }else{
            if(!gottem && hasMoved){
                boat.hitEnemy = false;
                boat.takenDamage = false;
                return false;
            }
        }
    }
    function gameOver(){
	
        /*
            needs no explanation
        */
        
        textAlign(CENTER);
        textSize(128);
        stroke(0);
        strokeWeight(4);
        text("AAAAAAAAAAAAAAAAAAAa", width/2, height/2);
        text('Subscribe to PewDiePie', width/2, height*3/4);
        if (!hasDied){
            x.stop();
            iWantToDie.play();
            hasDied = true;
        }
    }
    function allGotten(){
        gottenAll = true;
        for(let i = 0; i<EGGS[i].length; i++){
            if(!EGGS[i].getten){
                gottenAll = false;
            }
        }
        return gottenAll;
    }    
}
function keyPressed(){
        
    /*
    Checks to find any form of direction input
    */

    //console.log(keyCode);
    if(!hasDied){
        if(!boat.moving){
            boat.moving = true;
        }
        if(keyCode == UP_ARROW){
            boat.up = true;
        }if(keyCode == DOWN_ARROW){
            boat.down = true;;
        }if(keyCode == LEFT_ARROW){
            boat.left = true;
            boat.lastFace = 'left';
        }if(keyCode == RIGHT_ARROW){
            boat.right = true;
            boat.lastFace = 'right';
        }
        boat.hasMoved = true;
    }
}
function keyReleased(){
    //stops any movement when released (really dumb and may refine later)
    if(boat.moving){
        boat.moving = false;
        boat.up = false;
        boat.down = false;
        boat.right = false;
        boat.left = false;
        boat.hasMoved = false;
    }
}
function mousePressed(){
    if(choice == 'orange'){
        choice = 'pink';
    }else{
        choice = 'pink';
    }
}