
var mouse = {x:undefined,y:undefined,down:false}
var key = {enter:false, p:false,test:undefined}

window.addEventListener('keydown',
	function(event){
		if(event.code=='ArrowUp'){jeff.buttonposition.ArrowUp=true}
		if(event.code=='ArrowDown'){jeff.buttonposition.ArrowDown=true}
		if(event.code=='ArrowLeft'){jeff.buttonposition.ArrowLeft=true}
		if(event.code=='ArrowRight'){jeff.buttonposition.ArrowRight=true}
		if(event.code=='Enter'){key.enter=true}
		if(event.code=='p'){key.p=true}
		

		
	})

window.addEventListener('keyup',
	function(event){
		if(event.code=='ArrowUp'){jeff.buttonposition.ArrowUp=false}
		if(event.code=='ArrowDown'){jeff.buttonposition.ArrowDown=false}
		if(event.code=='ArrowLeft'){jeff.buttonposition.ArrowLeft=false}
		if(event.code=='ArrowRight'){jeff.buttonposition.ArrowRight=false}
		if(event.code=='Enter'){key.enter=false}
		if(event.code=='p'){key.p=false}
		
	})

function getdistince(x1,y1,x2,y2){
	var dis={x:x1-x2,y:y1-y2,dd:undefined}

	dis.dd=Math.pow(Math.pow(dis.x,2)+Math.pow(dis.y,2),0.5)
	return dis
}