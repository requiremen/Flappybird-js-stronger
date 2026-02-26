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
class pipe {
    constructor(elements){
        this.elements = elements;
        this.x = 100;
        this.pipespeed = 0.5;
    }
    movepipe(){
        this.x = this.x - this.pipespeed
        this.elements.forEach(pipe =>{
            pipe.style.left = this.x + "%";
        })
    }
}
let birdelemnt = document.querySelector(".bird");
let flappybird = new bird(birdelemnt);
let pipeelement = document.querySelectorAll(".pipe")
let pipebete = new pipe(pipeelement);
function gameloop() {
    flappybird.update();
    pipebete.movepipe();
}
setInterval(gameloop, 20)//async task
document.addEventListener("keydown", function (event) {
    if (event.code == "Space") {
        flappybird.jump();
    }
})
