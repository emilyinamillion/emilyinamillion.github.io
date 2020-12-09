var gif_createImg;

function setup() {
	createCanvas(200, 300);
	frame = loadImage('frame3.png');
	gif_createImg = createImg("https://media.giphy.com/media/07VZCxW23CedCFjW5X/giphy.gif");
  gif_createImg.hide()


}

let x =55;
let y = 300;




function draw() {
  // background(wall);

	// vid.show();
	// vid.position(20,20);
	// vid.size(width*.18, height*.40);
	// image(vid, (width) / 3+ 59, 145)







	// vase.resize(width*.24, height*.35);
  // ve = new Vase(x,y);
	// ve.display();

	// base.resize(width*.18, height*.28);
	// base_ = image(base, (width) / 3+ 65, 145);

 	// gif.resize(width*.17, height*.33);
	// gif_ = image(gif, width/3 + 80,165);




	// frame.resize(width*.30, height*.60);
	// frame_ = image(frame, (width) / 3, 0);

	// fauxto.resize(width*.18, height*.40);
	// image(fauxto,(width) / 3+ 59, 145);


	gif_createImg.size(102, 130);
	gif_createImg.position(45, 80);

	frame.resize(width*.98, height*.98);
	image(frame, 0, 0);


}





function mousePressed() {
	console.log(mouseX, mouseY);

	// image(vid, width/3 + 80,165);
	// vid.play();
	// frame.resize(width*.30, height*.60);
	// frame_ = image(frame, (width) / 3, 0);
	if (mouseX > 138 && mouseX < 350 && mouseY > 35 && mouseY < 510)  {
		ve.clicked()

	}
	else {}
}
