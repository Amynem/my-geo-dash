class Player {
    constructor(ctx, x, y, floor) {
        this.ctx = ctx;

        this.w = 40;
        this.h = 40;

        this.x = x;
        this.y = y;
        this.floor = floor;
        this.startingX = x;
        this.startingY = y;

        this.vy = 1;
        this.vx = 0;

        this.ax = 0;
        this.ay = 1;

        this.isJumping = false;
        this.jumpStrength = 13; 

        this.img = new Image();
        this.img.src = "assets/images/face-hehe.jpeg"

    }

    move() {

        // posicion en canvas
         this.x += this.vx;
        this.y += this.vy;

        // velocidad de aceleracion
        this.vy += this.ay;
        // this.vx += this.ax;

        // ver colision con suelo
        if (this.y + this.h >= this.floor) {
            // parar salto
            this.y = this.floor - this.h;
            this.vy = 0;
            this.ay = 1;
            this.isJumping = false;
        }
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        );
       // this.ctx.fillStyle = 'white'; 
       // this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    onKeyDown(keyCode){
        if (keyCode === 32) {
            this.jump();
        }
    }

    jump() {
        // solo puede saltar si no esta saltando
        if (!this.isJumping) {
            this.ay = 1;
            this.vy = -this.jumpStrength;
            this.isJumping = true;
        }
    }

    collidesWith(element) {
        return this.x <= element.x + element.w &&
          this.x + this.w >= element.x &&
          this.y <= element.y + element.h &&
          this.y + this.h >= element.y;
    }
    
    isDownCollision(element) {
        return this.collidesWith(element) &&
          this.y < element.y && 
            this.y + this.h >= element.y;
    }
    
    isRightCollision(element) {
        return this.collidesWith(element) && 
          this.x + this.w > element.x && 
          this.x <= element.x;
    }
    
    isLeftCollision(element) {
        return this.collidesWith(element) && 
          element.x + element.w > this.x &&
          element.x <= this.x;
    }
    resetPosition() {
        this.x = this.startingX;
        this.y = this.startingY;
        this.vy = 0;
        this.isJumping = false;
    }

}