// Create canvas variable

var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 50;
block_image_height = 200;

var block_image_object= "";

function new_image(get_image)
{
// to upload images
	fabric.Image.fromURL(get_image, function(img){
	block_image_object = img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({

	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '66') // add appropriate keycode
	{
		// upload BeastBoy
		new_image('beast boy.png');
		console.log("b is pressed-BeastBoy uploading")
	}
	if(keyPressed == '67')
	{
		block_x = 250;
		// upload cyborg
		new_image('cyborg.png')
		console.log("c is pressed-cyborg uploading")
	}
	
	if(keyPressed == '82')
	{
		block_x =500;
		// upload robin
		new_image('robin.png')
		console.log("r is pressed-robin uploading")
	}
	if(keyPressed == '83')
	{
		block_x = 725;
		// upload starfire
		new_image('starfire.png')
		console.log("s is pressed-starfire uploading")
	}
	if(keyPressed == '68')
	{
		block_x = 850;
	// upload raven
	new_image('raven.png')
	console.log("d is pressed-raven uploading")
	}
	
}