class Floor {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 0;
        this.h = 150;
        this.y = this.ctx.canvas.height - this.h;
        this.w = this.ctx.canvas.width;


    }


    move() {
    
    }

    draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}