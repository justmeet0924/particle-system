function shot(x, y, v, col, array) {


	angleMode(DEGREES)
	let r = 1;
	let angle = atan2(v.y, v.x);
	let angle2 = angle + 5 * random(-1, 1);
	let v_size = 6*random();
	let vx = v_size * cos(angle2);
	let vy = v_size * sin(angle2);

	array.push(new Shot(x, y, r, vx, vy, col));


}

class Shot {

	constructor(x, y, r, vx, vy, col) {

		this.x = x;
		this.y = y;
		this.r = r;
		this.w = this.r * 2;
		this.h = this.r * 2;
		this.vx = vx;
		this.vy = vy;
		this.fx = 0;
		this.fy = 1/2;
		this.life = 0;
		this.color = col;

	}
	
	remove(array){
		
		let i = array.indexOf(this);
		if(this.y > height || this.life > 2000){
			
			array.splice(i,1);
			
		}
		
		
		
	}

	display() {
		push();
		fill(this.color);
		translate(this.x, this.y);
		strokeWeight(1);
		noStroke();
		circle(0, 0, this.r * 2);
		pop();
	}
	
	display2() {
		push();
		fill(this.color);
		translate(this.x, this.y);
		strokeWeight(1);
		noStroke();
		rectMode(CENTER);
		rect(0, 0, this.r,this.r);
		pop();
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
		this.vx += this.fx;
		this.vy += this.fy;

		this.life += 1;
	}

	reflect_wall() {
		if (this.y < this.r) {
			this.vy = -this.vy * k_2;
			this.y = this.r;
		}
		if (this.y > height - this.r) {
			this.vy = -this.vy * k_2;
			this.y = height - this.r;
		}
		if (this.x < this.r) {
			this.vx = -this.vx * k_2;
			this.x = this.r;
		}
		if (this.x > width - this.r) {
			this.vx = -this.vx * k_2;
			this.x = width - this.r;
		}
	}

}
