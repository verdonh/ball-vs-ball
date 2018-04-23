


function restart(){
	var asteroid = new Asteroid(asize+10,asize+10,1,1,asize,'blue')
	var followydave = new Folower(100,100,0.5,0.5)
	aras=[followydave, asteroid]
	jeff.x=canvas.width/2
	jeff.y=canvas.height/2
	score=1

}

function startscreen(){
	
	var size={x:350,y:150}
	var position={x:canvas.width/2 ,y:canvas.height/2}
	c.beginPath()
	c.rect(position.x-size.x/2,position.y-size.y/2,size.x,size.y)
	c.fillStyle='white'
	c.fill()

	c.fillStyle='red'
	c.font="45px Arial"
	c.textAlign='center'
	c.fillText("START GAME",position.x,position.y+10)

	dscore()

	if(key.enter==true){
		endgame=2
		restart()
	}
}