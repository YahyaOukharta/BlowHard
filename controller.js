function Controller(){
    this.up=false;
    this.down=false;
    this.right=false;
    this.left=false;
}
function keyPressed(){   //set key state to true if pressed ...
    if(keyCode==UP_ARROW || key =="Z"){
        controller.up=true;
    }
    if(keyCode==DOWN_ARROW || key =="S"){
        controller.down=true;
    }
    if(keyCode==RIGHT_ARROW || key =="D"){
        controller.right=true;
    }
    if(keyCode==LEFT_ARROW || key =="Q"){
        controller.left=true;
    }
}
function keyReleased(){     //..set key state back to false if released ...
    if(keyCode==UP_ARROW || key =="Z"){
        controller.up=false;
    }
    if(keyCode==DOWN_ARROW || key =="S"){
        controller.down=false;
    }
    if(keyCode==RIGHT_ARROW || key =="D"){
        controller.right=false;
    }
    if(keyCode==LEFT_ARROW || key =="Q"){
        controller.left=false;
    }
}