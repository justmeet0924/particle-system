class Block {
	constructor(x, y, w, h, array, type, color) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.life = 0;
		this.color = color; //[0, 250, 0];
		this.obj = array;
		this.non_collide = this.obj.concat();
		this.collided = [];
		this.type = type;
		this.include = [];
	}

	init() {

	}

	update() {

			this.life += 1;

			let array = this.non_collide;

			array.forEach((b, i) => {
				if (collisionFunc(this, b)) {
					let removed = array.splice(i, 1);
					this.collided.push(removed);
				}
			});
		}

		in () {

			let array = [];
			this.obj.forEach(b => {

				let detect = abs(b.x - this.x) < this.w / 2 - b.r &&
					abs(b.y - this.y) < this.h / 2 - b.r;
				if (detect) {
					array.push(b);
				}



			});
			this.include = array;



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

	collide_member() {
		let array = [];

		this.obj.forEach((b, index) => {
			if (collisionFunc(this, b) && b !== this) {
				array.push(b);
			}
		});

		return array;
	}

	collide() {
		if (this.collide_member().length > 0) {
			return true;
		} else {
			return false;
		}
	}

	reflect(b) {
		
		if (abs(b.y - this.y) < this.h / 2) {
			//x_direction only
			b.vx = -b.vx*0.9;
		}
		if (abs(b.x - this.x) < this.w / 2) {
			//y_direction only
			b.vy = -b.vy*0.9;
		}

		if (abs(b.y - this.y) > this.h / 2 && abs(b.x - this.x) > this.w / 2) {
			b.vx = -b.vx*0.9;
			b.vy = -b.vy*0.9;
		}

	}


	reflect_all() {
		let array = this.collide_member();

		array.forEach((b) => {

			this.reflect(b);

		});

	}
	judge_reflect_all() {
		let array = this.collide_member();

		array.forEach((b) => {

			this.judge_reflect(b);

		});

	}



	judge_reflect(b) {
		if (b.vx > 0) {
			//何もしない

		}

		if (b.vx < 0) {
			//弾き返す
			this.reflect(b);

		}


	}



	change_color() {
		if (this.collide()) {
			this.color = [250, 0, 0];
		} else if (frameCount % 40 === 0) {
			this.color = [0];
		}
	}

	change_color_2() {

		this.include.forEach(b => {
			b.color = 0;
		})


	}

	change_color_3() {

		this.obj.forEach(b => {

			if (this.include.includes(b)) {
				b.color = [0, 200, 200];
			}


		});


	}

	change_color_4() {

		this.obj.forEach(b => {

			if (this.include.includes(b)) {
				b.color = [0, 200, 200];
			} else {
				b.color = 0;
			}


		});


	}
}

function collisionFunc(a, b) {
	let d =
		abs(a.x - b.x) < a.w / 2 + b.w / 2 && abs(a.y - b.y) < a.h / 2 + b.h / 2;

	return d;
	//collide:true
	//non collide:false
}
