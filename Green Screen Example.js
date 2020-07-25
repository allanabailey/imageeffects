var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");
//make a blank image of the same size
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

//loop through each pixes of fgImage
for(var pixel of fgImage.values()) {
    //look at currentPixel and is it is green,
    if(pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        //Look at same position in bgImage
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        //set output's corresponding pixel to bgImage's pixel.
        output.setPixel(x, y, bgPixel);
    } 
    //Otherwise: set otput's corresponding pixel to currentPixel
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    } 
}
print(output);