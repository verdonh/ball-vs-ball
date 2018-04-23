function Jeff(x,y){
	this.x=x;
	this.y=y;
	this.diameter=12
	this.speed=3
	this.colour='white'

	this.buttonposition={
		ArrowUp:false,
		ArrowDown:false,
		ArrowLeft:false,
		ArrowRight:false,
	}
	this.buttonpush=function(){		
		if(this.buttonposition.ArrowUp==true){
			this.y-=this.speed;
		}
		if(this.buttonposition.ArrowDown==true){
			this.y+=this.speed;
		}
		if(this.buttonposition.ArrowLeft==true){
			this.x-=this.speed;
		}
		if(this.buttonposition.ArrowRight==true){
			this.x+=this.speed;
		}
	}

	this.move=function(){
		this.buttonpush()
		this.draw();
		if(this.x>=canvas.width-this.diameter){
			this.x=canvas.width-this.diameter
		}
		if(this.x<=0){
			this.x=0
		}
		if(this.y>=canvas.height-this.diameter){
			this.y=canvas.height-this.diameter
		}
		if(this.y<=0){
			this.y=0
		}

	}

	this.draw=function(){
	c.beginPath();
	c.arc(this.x,this.y,this.diameter/2,0,Math.PI*2,false);
	c.strokeStyle=this.colour;
	c.fillStyle=this.colour;
	c.stroke();
	c.fill();
	}

	//this.end=function(){
	//	for(var i=0;i>=colidables.length;i++){
	//		if(colidables[i])
	//	}
	//}
}

function Asteroid(x,y,dx,dy,radious,colour){
	this.x=x
	this.y=y
	this.dx=dx
	this.dy=dy
	this.radious=radious
	this.colour=colour

	this.move=function(){
		if(this.x>=canvas.width-this.radious||this.x<=0+this.radious){
			this.dx=-this.dx
			this.dy=(rand((this.dy*10)-5,(this.dy*10)+5))/10
		}
		if(this.y>=canvas.height-this.radious||this.y<=0+this.radious){
			this.dy=-this.dy
			this.dx=(rand((this.dx*10)-5,(this.dx*10)+5))/10
		}
		
		this.x=this.x+this.dx
		this.y=this.y+this.dy
		this.draw()
	}

	this.draw=function(){
		c.beginPath()
		c.arc(this.x,this.y,this.radious,0,Math.PI*2,false);
		c.strokeStyle=this.colour;
		c.fillStyle=this.colour;
		c.stroke();
		c.fill();
	}
}

function Folower(x,y,dx,dy){
	this.x=x
	this.y=y
	this.dx=dx
	this.dy=dy
	this.radious=10
	this.colour='green'

	this.move=function(gotox,gotoy){
		this.gotox=gotox
		this.gotoy=gotoy
		if(this.x>=canvas.width-this.radious||this.x<=0+this.radious){
			this.dx=-this.dx
			this.dy=(rand((this.dy*10)-5,(this.dy*10)+5))/10
		}
		if(this.y>=canvas.height-this.radious||this.y<=0+this.radious){
			this.dy=-this.dy
			this.dx=(rand((this.dx*10)-5,(this.dx*10)+5))/10
		}
		if (this.gotox<this.x){
			this.x=this.x-this.dx
		}else{
			this.x=this.x+this.dx
		}
		if (this.gotoy<this.y){
			this.y=this.y-this.dy
		}else{
			this.y=this.y+this.dy
		}
		this.draw()
	}

	this.draw=function(){
		c.beginPath()
		c.arc(this.x,this.y,this.radious,0,Math.PI*2,false);
		c.strokeStyle=this.colour;
		c.fillStyle=this.colour;
		c.stroke();
		c.fill();
	}

}