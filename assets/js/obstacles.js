class Square {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = 40; 
        this.h = 40;
        this.velocity = -6;
        
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.x += this.velocity;
    }

    reset() {
        this.x = this.originalX; 
        this.y = this.originalY;
        this.visible = true; 
    } 

    isVisible() {
        return this.x + this.w > 0;
    }
}


class Triangle {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = 40; 
        this.h = 40;
        this.velocity = -6;

        this.img = new Image();
        this.img.src = "assets/images/triangle-01.png"

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
        //this.ctx.fillStyle = "red";
        //this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.x += this.velocity;
    }

    reset() {
        this.x = this.originalX; 
        this.y = this.originalY; 
        this.visible = true; 
    }

    isVisible() {
        return this.x + this.w > 0;
    }

}

class TriangleTwo extends Triangle {
    constructor  (ctx, x, y) {
        super(ctx, x, y);
        this.w = 60; 
        this.h = 40;

        this.img = new Image();
        this.img.src = "assets/images/triangle-02.png"
    }

}

class Rectangle {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x; 
        this.y = y; 
        this.w = 40; 
        this.h = 80;
        this.velocity = -6;
    }

    draw() {
        this.ctx.fillStyle = 'black'; 
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.x += this.velocity;
    }

    reset() {
        this.x = this.originalX; 
        this.y = this.originalY; 
        this.visible = true; 
    }

    isVisible() {
        return this.x + this.w > 0;
    }
}

class floatingFloor {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x; 
        this.y = y; 
        this.w = 200; 
        this.h = 40;
        this.velocity = -6;
    }

    draw() {
        this.ctx.fillStyle = 'black'; 
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        
    }

    move() {
        this.x += this.velocity;
    }

    reset() {
        this.x = this.originalX; 
        this.y = this.originalY; 
        this.visible = true; 

    isVisible() {
        return this.x + this.w > 0;
    }

}

class smallFloatingFloor {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x; 
        this.y = y; 
        this.w = 100; 
        this.h = 20;
        this.velocity = -6;
    }

    draw() {
        this.ctx.fillStyle = 'black'; 
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        
    }

    move() {
        this.x += this.velocity;
    }

    reset() {
        this.x = this.originalX; 
        this.y = this.originalY; 
        this.visible = true; 
    }

    isVisible() {
        return this.x + this.w > 0;
    }



}

