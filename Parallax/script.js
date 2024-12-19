const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 4;
//let gameFrame = 0;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';

const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

let x = 0;
let x2 = 2400;

const slider = document.getElementById('slider');
const gameSpeedDisplay = document.getElementById('gameSpeedDisplay');
slider.value = gameSpeed;
slider.addEventListener('change',function(e){
    gameSpeed = e.target.value;
    console.log("Game speed value changed to " + gameSpeed);

    
})

class Layer{
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        //this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * speedModifier;
    }

    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width){
            this.x = 0;
            console.log(x);
        }
        console.log("x is " + x + "width is " + -this.width + "\t" + (-x <= -this.width));
        this.x = this.x - this.speed;

        //this.x = gameFrame * this.speed % this.width;
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y, this.width, this.height);
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width, this.height);
    }
}

const layers = [new Layer(backgroundLayer1,.3),new Layer(backgroundLayer2,.4),new Layer(backgroundLayer3,.5),new Layer(backgroundLayer4,.7),new Layer(backgroundLayer5, .9)]; 






function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameSpeedDisplay.innerHTML = gameSpeed;


    layers.forEach(object => {
        object.update();
        object.draw();
    });
    

    //gameFrame--;
    requestAnimationFrame(animate);
   
    
};
animate();



