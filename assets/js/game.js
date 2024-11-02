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
        ];

        this.interval = null;
        this.started = false;
        
        

    }

    start() {
        if (!this.started) {

            this.started = true;
    
            this.interval = setInterval(() => {
                this.clear();
                this.move();
                this.checkCollisions();
                this.draw();
            
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
    } 

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.isVisible());
    }

    
    onKeyDown(keyCode) {
        this.player.onKeyDown(keyCode);
    }

    pause() {
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
    }
}