//image taken from the DukeLearnToProgram (DLTP) site - file can be replaced with any.
//https://www.dukelearntoprogram.com/course1/example/index.php

//new SimpleImage is a method imported from the Edu Duke library
//Documentation found: https://www.dukelearntoprogram.com/course1/doc/

//Simple method to change a completely blue image to green.
var image = new SimpleImage("duke_blue_devil.png");
for(var pixel of image.values()) {
	//if it is blue, change it to green (change fg, not bg)
	if(pixel.getRed() < 200) {
		pixel.setRed(0);
		pixel.setGreen(255);
		pixel.setBlue(100);
}
print(image);

//Want the green devil to have RGB 0, 255, 100
