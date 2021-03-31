class Box{ 
    constructor(x,y,width,height) {
         var option={ 
             restitution : 1 } 
             this.body=Bodies.rectangle(x,y,width,height,option)
              World.add(world,this.body)
             } 
             display() {
                 var pause = this.body.position
                 var angle = this.body.angle
                 push();
                 translate(pause.x,pause.y);
                 rotate(angle);
                 rectMode(CENTER) ;
                 rect(0,0,this.width,this.height);
                 pop();
                 } 
                }