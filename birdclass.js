class bird {
    constructor(element) {
        this.element = element,
            this.y = 40;
        this.gravity = 0.5;
        this.velocity = 0;
        this.jumppower = -8;

    }
    update() {
        this.velocity = this.velocity + this.gravity;
        this.y = this.y + this.velocity;
        if (this.y > 90) {
            this.y = 90
            this.velocity = 0
        }
        if (this.y < 0) {
            this.y = 40;

        }
        this.element.style.top = this.y + "%"


    }
    jump() {
        this.velocity = this.jumppower
    }



}
