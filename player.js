function Player( sprites ){
    
    this.sprites=sprites;       //sprites image

    this.pos=createVector(width/2,height/2);
    this.vel=createVector(0,0);

    this.isMoving=false;

    this.class=3;       //class of player 
    this.dir=0;         //direction of player
    this.frame=0;       //frame of animation of the player
    this.frameCount=0;      //timer for animation 

    //functions
    this.render=function(){     //rendering
        image(this.sprites, this.pos.x-tileSize/2,this.pos.y-tileSize/2 , tileSize,tileSize,
                            this.dir*(3*16) + this.frame*16 , this.class*16 , 16,16
        );
        //the parameters used in the image() function depend on the SpriteSheet...
    }
    this.updateFrame=function(){  //updates frames of animation of the player..
        if(this.isMoving){              //if the player is moving ..
            if(this.frame===0){
                this.frame=1;               
                this.frameCount=0;
            }else{
                this.frameCount+=0.1;     //... oscilate value of this.frame between 1 and  
                this.frame= ( floor( this.frameCount ) +1 ) %3 ;  2
            }
        }else{
            this.frame=0;           //otherwise set frame and framecount to zero
            this.frameCount=0;
        }

        //these were useful during debugging :
            /*var str="frame ="+this.frame +" \n/frameCount= "+this.frameCount;
            textSize(32);
            fill(0)
            text(str,20, 40 );
            */
    }

    this.update=function(){ //updating position of player
        this.pos.add(this.vel);
        this.vel.mult(0.7);

    }

    this.Input=function(){      //takes input from the controller object (check controller.js)
        var moveSpeed=0.7;      
        if(controller.up){
            this.vel.y-=moveSpeed;      //add speedvalue to the velocity in specific axis 
            this.dir=2;                 // and set direction accordingly
        }
        if(controller.down){
            this.vel.y+=moveSpeed;
            this.dir=0;
        }
        if(controller.left){
            this.vel.x-=moveSpeed;
            this.dir=3;
        }
        if(controller.right){
            this.vel.x+=moveSpeed;
            this.dir=1;
        }
        if (controller.touch)
        {
            var mouse_pos = createVector(mouseX, mouseY);
            var dir = mouse_pos.sub(this.pos).setMag(2);
            this.pos.add(mouse_pos);
            var angleY = degrees( dir.angleBetween(createVector(0,-1)));
            var angleX = degrees(dir.angleBetween(createVector(1,0)));
            //console.log(angleX);
            if (angleY < 45)
                this.dir = 2;
            else if (angleY > 135)
                this.dir = 0;
            else if (angleX < 45)
                this.dir = 1; 
            else if (angleX > 135)
                this.dir = 3;   
        }
        if(controller.up || controller.down || controller.right || controller.left || controller.touch){
            this.isMoving=true;             //set isMoving to true if a movement key is pressed 
        }else{
            this.isMoving=false;            //set it to false otherwise
        }
    }

    //main function of the player
    this.run=function(){
        this.render();
        this.Input();
        this.update();
        this.updateFrame();

    }
}