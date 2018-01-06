let screen_w = 640;
let screen_h = 480;

function getRandomArbitrary(min, max)
{
  return Math.random() * (max - min) + min;
}

class Walker {
  constructor({ xPos, yPos, color }) {
    this.x = xPos;
    this.y = yPos;
    this.c = color;
  }

  render(p5Ptr) {
    p5Ptr.stroke(this.c);
    p5Ptr.fill(this.c);
    p5Ptr.point(this.x, this.y);
  }

  step() {
    this.x = this.x + getRandomArbitrary(-1, 1);
    this.y = this.y + getRandomArbitrary(-1, 1);

    if (this.x < 0)
      this.x = 0

    if (this.x > screen_w)
      this.x = screen_w;

    if (this.y < 0)
      this.y = 0

    if (this.y > screen_h)
      this.y = screen_h;
  }
}

const sketch = (p5) => {

  const bgColor = 128;
  let walkers = [];

  p5.setup = () => {
    p5.createCanvas(screen_w, screen_h);
    p5.background(bgColor);

    const firstWalker = new Walker({ xPos: screen_w / 2, yPos: screen_h / 2, color: 0 });
    walkers.push(firstWalker);
  }

  p5.draw = () => {
    walkers.forEach(w => { w.step(); w.render(p5); });
  }

  p5.mousePressed = () => {
    const color = getRandomArbitrary(0, 128);
    const firstWalker = new Walker({ xPos: p5.mouseX, yPos: p5.mouseY, color: color });
    walkers.push(firstWalker);
  }
}

export default sketch;