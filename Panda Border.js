var img = new SimpleImage("smallpanda.png");
var w = img.getWidth();
var h = img.getHeight();
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}
function addBorder(image, borderWeight) {
    for(var pixel of img.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if(x >= w - borderWeight || y >= h - borderWeight || x <= borderWeight || y <= borderWeight) {
            setBlack(pixel);
        }
    }
}
addBorder(img, 10);
print(img);