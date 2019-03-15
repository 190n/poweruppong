class Paddle {

    // which=0: left paddle
    // which=1: right paddle
    constructor(which) {
        this.which = which;
        this.x = which === 0 ? PADDLE_MARGIN : WIDTH - PADDLE_MARGIN;
        this.y = HEIGHT / 2;
        this.height = PADDLE_DEFAULT_HEIGHT;
        this.controlsReversed = false;
    }
}
