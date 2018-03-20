var canvas=document.querySelector('canvas');
canvas.width = (innerHeight/4)*3;
canvas.height = (innerHeight/3)*2;
var c = canvas.getContext('2d');
function rand(min,max){
	//returns a random number between 
	//max and min not including max
	var len=max-min
	return Math.floor(min+(Math.random()*Math.floor(len)))
}
var endgame=1
var counter=2
var score=1
var jeff = new Jeff(100,100)
var asize=canvas.height/12
var aras = []

function dscore(){
	c.fillStyle='white'
	c.font="15px Arial"
	c.textAlign='left'
	c.fillText(score,3,13)
}
function build(){
	
	dscore()
	if(409%counter==0){
		var asteroid = new Asteroid(asize+10,asize+10,1,1,asize,'red')
		aras.push(asteroid)
		counter=2
		score++
	}
	jeff.move()
	for(var i=0;i<aras.length;i++){
		console.log(aras)
		aras[i].move()
		if(getdistince(jeff.x,jeff.y,aras[i].x,aras[i].y).dd<=jeff.diameter+aras[i].radious){
			endgame=1
		}
	}
	
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

	if(endgame==2){
		build()
		counter++	
	}else if(endgame==1){
		startscreen()
		console.log(key.p)	
	}
}



animate();