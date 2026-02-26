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
