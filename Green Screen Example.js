//image taken from the DukeLearnToProgram (DLTP) site - file can be replaced with any.
//https://www.dukelearntoprogram.com/course1/example/index.php

//new SimpleImage is a method imported from the Edu Duke library
//Documentation found: https://www.dukelearntoprogram.com/course1/doc/

//Method to create a green screen effect.

//fgImage = green screen background, bgImage the image to impose on top.
var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");

//make a blank image of the same size
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

//loop through each pixes of fgImage
for(var pixel of fgImage.values()) {
    //look at currentPixel and check if green
    if(pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        //Look at same position in bgImage
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        //set output's corresponding pixel to bgImage's pixel.
        output.setPixel(x, y, bgPixel);
    } 
    //Otherwise: set output's corresponding pixel to currentPixel
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    } 
}
print(output);
