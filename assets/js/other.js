```html
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="100"></canvas>
  </body>
</html>

```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.lineTo(125, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}

draw();

```

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes