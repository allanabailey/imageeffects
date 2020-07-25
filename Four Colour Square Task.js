//new SimpleImage is a method imported from the Edu Duke library
//Documentation found: https://www.dukelearntoprogram.com/course1/doc/

//Method to set an image with four different coloured square based on pixel x,y coordinates.

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  //top left
  if (x <= img.getWidth()/2 && y <= img.getHeight()/2){
    px.setRed(255);
  }
  //bottom right
  if (y >= img.getHeight()/2 && x >= img.getWidth()/2){
    px.setBlue(255);
  }
  //bottom left
  if (y >= img.getHeight()/2 && x <= img.getWidth()/2){
    px.setBlue(255);
    px.setRed(255);
  }
  //top left
  if (y <= img.getHeight()/2 && x >= img.getWidth()/2){
    px.setGreen(255);
  }
}
print (img);
