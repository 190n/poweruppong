class Ball {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

    move(dt) {
        this.x += this.dx * dt;
        this.y += this.dy * dt;
    }
}
