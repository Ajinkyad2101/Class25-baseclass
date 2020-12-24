class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.groundimg=loadImage("sprites/ground.png")

    }
    display(){
      push();
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.groundimg,pos.x, pos.y, this.width, this.height);
      pop();
    }
  };