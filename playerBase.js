class PlayerBase{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/base1.png");
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }

}