class Game {
    constructor(ctx) {
        this.ctx = ctx;
        
        this.middleOfCanvas = Math.floor(ctx.canvas.width / 2);
        this.background = new Background(ctx);
        this.floor = new Floor(ctx);
        this.player = new Player(ctx, this.middleOfCanvas, 510, this.floor.y);
        this.obstacles = [
            new Triangle(ctx, 1500, 510),
            new TriangleTwo(ctx, 1700, 510),
            new Triangle(ctx, 1900, 510),
            new Square(ctx, 1950, 510),
            new Rectangle(ctx, 2100, 470),
            new Square(ctx, 2280, 430),
            new Rectangle(ctx, 2280, 470),
            new floatingFloor(ctx,2410, 400),
            new floatingFloor(ctx, 2610, 400),
            new Triangle(ctx, 2760, 360),
            new Triangle(ctx, 2400, 510),
            new Triangle(ctx, 2440, 510),
            new Triangle(ctx, 2480, 510),
            new Triangle(ctx, 2520, 510),
            new Triangle(ctx, 2560, 510),
            new Triangle(ctx, 2600, 510),
            new Triangle(ctx, 2640, 510),
            new Triangle(ctx, 2680, 510),
            new Triangle(ctx, 2720, 510),
            new Triangle(ctx, 2760, 510),
            new Triangle(ctx, 2800, 510),
            new TriangleTwo(ctx, 3000, 510),
            new floatingFloor(ctx, 3200, 510),
            new smallFloatingFloor(ctx, 3450, 470),
            new smallFloatingFloor(ctx, 3570, 420),
            new smallFloatingFloor(ctx, 3690, 370),
            new smallFloatingFloor(ctx, 3810, 320),
            new smallFloatingFloor(ctx, 3910, 320),
            new Triangle(ctx, 3970, 280),
            new Triangle(ctx, 4200, 510),
            new floatingFloor(ctx, 4300, 510),
            new Triangle(ctx, 4460, 470),
            new floatingFloor(ctx, 4650, 510),
            new Triangle(ctx, 4810, 470),
            new smallFloatingFloor(ctx, 5000, 470),
            new Triangle(ctx, 4990, 510),
            new Triangle(ctx, 5030, 510),
            new Triangle(ctx, 5070, 510),
            new smallFloatingFloor(ctx, 5300, 470),
            new Triangle(ctx, 5290, 510),
            new Triangle(ctx, 5330, 510),
            new Triangle(ctx, 5370, 510),
        ];

        this.obstacles.forEach(obstacle => {
            obstacle.originalX = obstacle.x;
            obstacle.originalY = obstacle.y;
        });
        this.obstaclesReset = [...this.obstacles];

        this.interval = null;
        this.started = false;
        this.timeSurvived = 0;
        this.bestScore = localStorage.getItem("bestScore") || 0;

        this.audio = new Audio("assets/audio/Clown.mp3");
        this.audio.volume = 0.05;

    }


    start() {
        this.audio.play();
        if (!this.started) {

            this.started = true;
            this.timeSurvived = 0;
    
            this.interval = setInterval(() => {
                this.clear();
                this.move();
                this.checkCollisions();
                this.draw();
                this.timeSurvived++;
            
            }, 1000 / 60);
        }
    }

    move() {
        this.player.move();
        this.obstacles.forEach((obstacle) => obstacle.move());
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.floor.draw();
        this.obstacles.forEach((obstacle) => obstacle.draw());
        this.ctx.fillStyle = "white";
        this.ctx.font = "20px Poppins";
        this.ctx.fillText(`Score: ${this.timeSurvived} `, 20, 30);
        this.ctx.fillText(`Best Score: ${this.bestScore}`, 20, 60);
    } 

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // this.obstacles = this.obstacles.filter((obstacle) => obstacle.isVisible());
    }

    
    onKeyDown(keyCode) {
        this.player.onKeyDown(keyCode);
    }

    pause() {
        this.audio.pause();
        this.started = false;
        clearInterval(this.interval);
    }

    checkCollisions() {
        const collidesWithObstacle = this.obstacles.some((obstacle) => {
            if (this.player.collidesWith(obstacle)) {
                if (obstacle instanceof Triangle) {
                    this.gameOver();
                }
                if (this.player.isDownCollision(obstacle)) {
                    this.player.floor = obstacle.y;
                } else {
                    this.gameOver();
                }
                return true;
            } else {
                return false;
            }
        });

        if (!collidesWithObstacle) {
            this.player.floor = this.floor.y;
            this.player.ay = 1;
        } 
    }

    gameOver() {
        this.pause();

        document.getElementById("survival-time").innerText = this.timeSurvived;
        document.getElementById("game-over-popup").style.display = "flex";


        /*if (this.timeSurvived > this.bestScore) {
            this.bestScore = this.timeSurvived;
            localStorage.setItem("bestScore", this.bestScore); // Update best score in localStorage
            console.log(`New High Score! You survived for ${this.timeSurvived} seconds.`);
        } else {
            console.log(`Game Over! You survived for ${this.timeSurvived} seconds.`);
        }*/
    }

    submitScore() {
        const playerName = document.getElementById("player-name").value;
        const timeSurvived = game.timeSurvived;
    
        if (timeSurvived > game.bestScore) {
            game.bestScore = timeSurvived;
            localStorage.setItem("bestScore", timeSurvived); 
            localStorage.setItem("bestPlayer", playerName);  
        }
    
        document.getElementById("game-over-popup").style.display = "none";
        this.resetGame();
    }

    resetGame() {
        this.clear();
        
        this.player.resetPosition();
        
        this.timeSurvived = 0;
        this.obstacles.forEach(obstacle => {
            obstacle.reset(); // Call reset on each obstacle
        });
        
        this.started = false;
        document.getElementById("game-over-popup").style.display = "none";
        this.start();
    }
}
