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