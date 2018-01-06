let screen_w = 100;
let screen_h = 100;

const sketch = (p5) => {

  const bgColor = 0;
  let mouseReleased = true;

  p5.setup = () => {
    p5.createCanvas(screen_w, screen_h);
    p5.background(bgColor);
  }

  p5.draw = () => {
    if( !mouseReleased )
    {
      p5.stroke(255);
      p5.fill(255);
      p5.point(p5.mouseX, p5.mouseY);
    }
  }

  p5.mousePressed = () => {
    mouseReleased = false;
  }

  p5.mouseReleased = () => {
    mouseReleased = true;
  }
}

export default sketch;

