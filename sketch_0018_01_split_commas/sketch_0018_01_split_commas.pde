int[] data;

void setup() { 
  size(480, 270);
  // The text from the file is loaded into an array. 
  String[] stuff = loadStrings("data.txt");
  // This array has one element because the file only has one line. 
  // Convert String into an array of integers using ',' as a delimiter

  // Later we'll see how we can do this with the Table class
  data = int(split(stuff[0], ',' ));
}

void draw() {
  background(255);
  stroke(0);

  for (int i = 0; i < data.length; i ++ ) {
    // The array of ints is used to set the color and height of each rectangle.
    fill(data[i]); 
    rect(i*64, 0, 20, data[i]);
    println(data[i]);
  }
}