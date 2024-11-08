function setup() {
	createCanvas(400, 600);
	
	// Create a slider and place it at the top of the canvas.
  slider = createSlider(0, 10,5);
  slider.position(10, 10);
  slider.size(280);
	
	slider2 = createSlider(0, 20,5);
  slider2.position(10, 50);
  slider2.size(280);


　p = new Propeller(200,100);
	
	b = new Block(200, 500, 100, 20, p.shots, null, [0,0,250]);


}


function draw() {
	background(20);
	
	p.update();
	p.render();
	
	p.shot();
	
	p.angle_v = slider.value();
	
	p.shot_num = slider2.value();
	
	
	b.in();
	b.update();
	b.render();
	b.reflect_all();
	
	


}

function keyPressed(){
	
	p.shot_color = [250*random(),250*random(),250*random()];
	
	
	
}

function mouseClicked() {
	



}
