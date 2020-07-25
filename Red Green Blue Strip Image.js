//image taken from the DukeLearnToProgram (DLTP) site - file can be replaced with any.
//https://www.dukelearntoprogram.com/course1/example/index.php

//new SimpleImage is a method imported from the Edu Duke library
//Documentation found: https://www.dukelearntoprogram.com/course1/doc/

//Simple method to overlay an image with equal red, green and blue stripes.
var img = new SimpleImage("lion.jpg");
for(var pixel of img.values()) {
    if(pixel.getX() < img.getWidth() / 3) {
        pixel.setRed(255);
    } else {
        if(pixel.getX() > img.getWidth() / 3 && pixel.getX() < img.getWidth() / 3 * 2) {
            pixel.setGreen(255);
        } else {
            if(pixel.getX() > img.getWidth() / 3 * 2) {
                pixel.setBlue(255);
            }
        }
    }
}
print(img);
