let x;
let death;
let boat;
let hasDied = false;
//let enemy;
let reeeeee = [];
let EGGS = [];
let iWantToDie;
let Level = 1;
let choice;
let bigOof;
function preload(){
	/*
		loads nightmare fuel
	*/
	bigOof = loadSound('assets/Congratulations.mp3');
	x = loadSound("assets/Dragon Tales - Opening Theme (Instrumental Trackrip).mp3");
	death = loadSound("assets/DeathSound.wav");
	iWantToDie = loadSound('assets/AmeliaEndgame.wav');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	fullscreen();
	characterSelect();
	newLevel();
	x.play();
	//console.log(boat.x);
}
function draw() {
	gamePlay();
}

