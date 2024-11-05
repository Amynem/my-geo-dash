const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const game = new Game(ctx);

document.getElementById('start-button').onclick = function() {
  document.getElementById('start-screen').style.display = 'none';
  game.start(); 
};

document.addEventListener("keydown", (event) => {
    game.onKeyDown(event.keyCode);
  });