class Hblock {
	constructor(x, y, w, h, array, color) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.life = 0;
		this.color = color; //[0, 250, 0];
		this.obj = array;

	}
	
	reflect(){
		
		this.obj.forEach( obj =>{
			
			if(collisionFunc(obj, this)){
				
				obj.vx = -obj.vx
				
			}
			
			
			
		})
		
		
		
	}



	render() {
		push();
		rectMode(CENTER)
		fill(this.color);
		translate(this.x, this.y);
		strokeWeight(1);
		rect(0, 0, this.w, this.h);
		pop();
	}


}
