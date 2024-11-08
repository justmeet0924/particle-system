class Propeller {
	constructor(x, y) {

		this.x = x;
		this.y = y;
		this.angle = 0;
		this.angle_v = 10;
		this.r = 10;
		this.color = [0, 250, 0];
		this.shot_color = [250,250,0];
		this.shots = [];
		this.shot_num = 10;
		this.p1 = {
			x: 0,
			y: 0
		};

	}

	shot() {

		let v = createVector(cos(this.angle), sin(this.angle));

		for (let i = 0; i < this.shot_num; i++) {
			
			//let col = [250*random(),250*random(),250*random()];
			
			shot(this.p1.x, this.p1.y, v, this.shot_color, this.shots);
			
		}




	}

	update() {

		this.angle += this.angle_v;

		this.p1.x = this.x + this.r * cos(this.angle);
		this.p1.y = this.y + this.r * sin(this.angle);

		this.shots.forEach(s => {
			s.update();
			s.remove(this.shots);
			
			
		});
		
		// if(this.shots.length > 1000){
		// 	this.shots.splice(0,10);
		// }
		console.log(this.shots.length)

	}

	render() {

		push();
		translate(this.x, this.y);
		rotate(this.angle);
		stroke(this.color);
		strokeWeight(10)
		line(0, 0, this.r, 0);
		line(0, 0, -this.r, 0);
		line(0, 0, 0, this.r);
		line(0, 0, 0, -this.r);
		pop();

		push();
		circle(this.p1.x, this.p1.y, 20);
		pop();

		this.shots.forEach(s => {
			s.display()
		});

		console.log(this.shots[0])

	}


}
