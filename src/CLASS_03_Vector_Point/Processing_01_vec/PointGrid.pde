//https://processing.org/reference

int cols, rows;
int spacing = 30;
float influenceRadius = 150;
float pointSize = 10;

void setup() {
  size(600, 600);
  cols = width / spacing;
  rows = height / spacing;
}

void draw() {
  background(0);
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      float x = i * spacing + spacing / 2;
      float y = j * spacing + spacing / 2;

      float d = dist(mouseX, mouseY, x, y);
      
      float brightness = map(d, 0, influenceRadius, 255, 50);
      brightness = constrain(brightness, 50, 255);
      
      fill(brightness);
      noStroke();
      ellipse(x, y, pointSize, pointSize);
    }
  }
}

void mouseWheel(MouseEvent event) {
  float delta = event.getCount();
  influenceRadius += delta * 10;
  influenceRadius = constrain(influenceRadius, 50, 400);
}
