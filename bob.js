class bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction0,
            density:7.8
        }
    

        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body);
        consolw.log(this.body);
    }

display(){

    var paperpos=this.body.position;
    push()
    
    ellipseMode(RADIUS)
    fill(254,0,255)
    ellipse(this.body.position.x,this.body.position.y,25,25);
    pop();
}

}