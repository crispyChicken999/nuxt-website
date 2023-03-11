document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

class Main {
  constructor() {
    this.stageCalcInside = new createjs.Stage(document.createElement('canvas'));
    this.stageCalcInside.autoClear = false;
    const waveShape = new WaveShape();
    this.stageCalcInside.addChild(waveShape);
    this.stageOverlay = new createjs.Stage('canvasOverlay');
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on('tick', this.handleTick, this);
    this.handleResize();
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  handleTick() {
    const context = this.stageCalcInside.canvas.getContext('2d');
    context.fillStyle = 'rgba(255, 255, 255, 0.1)';
    context.fillRect(
      0,
      0,
      this.stageCalcInside.canvas.width,
      this.stageCalcInside.canvas.height);
    this.stageCalcInside.update();
    this.stageOverlay.update();
    const context2 = this.stageOverlay.canvas.getContext('2d');
    context2.globalCompositeOperation = 'lighter';
    context2.drawImage(this.stageCalcInside.canvas, 0, 0);
  }

  handleResize() {
    this.stageCalcInside.canvas.width = innerWidth;
    this.stageCalcInside.canvas.height = innerHeight;
    this.stageOverlay.canvas.width = innerWidth;
    this.stageOverlay.canvas.height = innerHeight;
  }
}

let noise;
class WaveShape extends createjs.Shape {
  constructor(maxLines = 10, maxVertex = 5, debugMode = false) {
    super();
    this._time = 0;
    noise = new Processing().noise;
    this._maxLines = maxLines;
    this._maxVertex = maxVertex;
    this._debugMode = debugMode;
    this.on('tick', this.handleTick, this);
  }

  handleTick(event) {
    this._time += 0.002;
    this.graphics.clear();
    for (let i = 0; i < this._maxLines; i++) {
      let lineWidth = (0.08 * i) + 0.29;
      if (this._debugMode == true) {
        lineWidth = 1.0;
      }
      this.drawWave(this._maxVertex, lineWidth, i * 0.10);
    }
  }

  drawWave(vertexNum, strokeSize, timeOffset) {
    const stageW = window.innerWidth;
    const stageH = window.innerHeight;
    const colorList = ['#59AAFF'];
    this.graphics
      .setStrokeStyle(strokeSize)
      .beginStroke(colorList[Math.floor(Math.random() * colorList.length)]);
    const vertexArr = [];
    for (let i = 0; i <= vertexNum; i++) {
      const noiseNum = noise(i * 0.2, this._time + timeOffset) - 0.5;
      vertexArr[i] = noiseNum * stageH * 2;
    }
    const BASE_Y = stageH / 2;
    const points = [];
    points.push({x: -200, y: BASE_Y});
    for (let i = 0; i <= vertexNum; i++) {
      points.push({
        x: (stageW * (i / vertexNum)) >> 0,
        y: vertexArr[i] + BASE_Y
      });
    }
    points.push({x: stageW + 200, y: BASE_Y});
    for (let i = 0; i < points.length; i++) {
      if (i >= 2) {
        const p0x = points[i - 0].x;
        const p0y = points[i - 0].y;
        const p1x = points[i - 1].x;
        const p1y = points[i - 1].y;
        const p2x = points[i - 2].x;
        const p2y = points[i - 2].y;
        const curveStartX = (p2x + p1x) / 2;
        const curveStartY = (p2y + p1y) / 2;
        const curveEndX = (p0x + p1x) / 2;
        const curveEndY = (p0y + p1y) / 2;
        this.graphics
          .moveTo(curveStartX, curveStartY)
          .curveTo(p1x, p1y, curveEndX, curveEndY);
      }
    }
    this.graphics.endStroke();
    if (this._debugMode == true) {
      for (let i = 0; i < points.length; i++) {
        const p0x = points[i - 0].x;
        const p0y = points[i - 0].y;
        if (i > 0) {
          const p1x = points[i - 1].x;
          const p1y = points[i - 1].y;
          this.graphics
            .setStrokeStyle(0.5)
            .beginStroke('red')
            .moveTo(p1x, p1y)
            .lineTo(p0x, p0y)
            .endStroke();
        }
        this.graphics
          .beginFill('red')
          .drawCircle(p0x, p0y, 3)
          .endFill();
      }
    }
  }
}

