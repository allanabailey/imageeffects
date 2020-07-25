//image taken from the DukeLearnToProgram (DLTP) site - file can be replaced with any.
//https://www.dukelearntoprogram.com/course1/example/index.php

//new SimpleImage is a method imported from the Edu Duke library
//Documentation found: https://www.dukelearntoprogram.com/course1/doc/

//Simple method to swap pixels coloured red to green and vice versa.
var img = new SimpleImage("smallhands.png");
print(img);

function swapRedGreen(x) {
    for(var pixel of img.values()) {
        var newR = pixel.getGreen();
        var newG = pixel.getRed();
        pixel.setGreen(newG);
        pixel.setRed(newR);
    }
}
swapRedGreen(img);
print(img);
