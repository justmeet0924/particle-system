class Block2{
	constructor(x,y,w,h,array){
		
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.obj = array;
		this.block1 = new Vblock(x,y-h/2,w+10,18,array,"blue");
		this.block2 = new Vblock(x,y+h/2,w+10,18,array,"blue");
		this.block3 = new Hblock(x+w/2,y,18,h+10,array,"blue");
		this.block4 = new Hblock(x-w/2,y,18,h+10,array,"blue");
		
	}
	
	reflect(){
		
		this.block1.reflect();
		this.block2.reflect();	
		this.block3.reflect();	
		this.block4.reflect();	
	
	}
	
	render(){
		
		this.block1.render();
		this.block2.render();
		this.block3.render();
		this.block4.render();
		
		
	}
	
	

}
