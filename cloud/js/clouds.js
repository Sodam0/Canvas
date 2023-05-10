const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];
const colors = [
    'white','rgba(255,255,255,.3)', 'rgba(173,155,211,.7)'
]
const maxSize = 5;
const minSize = 0;
const mouseRadius = 25;

let mouse = {x:null, y:null}
window.onmousemove = function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    // console.log(mouse);
}

function Particle(x,y,directionX,directionY,size,color){
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    // this.draw = () => {
    //     ctx.beginPath();
    //     ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    //     ctx.fillStyle = this.color;
    //     ctx.fill();
    // }
    // this.draw();
}

Particle.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
}

Particle.prototype.update = function(){
    this.x += this.directionX;
    this.y += this.directionY;
    if(this.x + this.size*2 > canvas.width || this.x - this.size*2 <0){
        this.directionX = -this.directionX;
    }
    if(this.y + this.size*2 > canvas.height || this.y - this.size*2 <0){
        this.directionY = -this.directionY;
    }
    if(mouse.x - this.x < mouseRadius && mouse.x - this.x > -mouseRadius && mouse.y - this.y < mouseRadius &&mouse.y - this.y > -mouseRadius){
        if(this.size < maxSize){
            this.size += 20;
        }
    }else if(this.size > minSize){
        this.size -= 1;
    }
    if(this.size < 0){
        this.size = 0;
    }
    this.draw();
}

function init(){
    particleArray = [];
    for(let i=0; i<1000; i++){
        let size = 0;
        let x = Math.random()*(((innerWidth-size*2)-size*2)+size*2);
        let y = Math.random()*(((innerHeight-size*2)-size*2)+size*2);
        let directionX = Math.random()*.2-.1;
        let directionY = Math.random()*.2-.1;
        let color = colors[Math.floor(Math.random()*colors.length)];
        particleArray.push(new Particle(x,y,directionX,directionY,size,color));
    }
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0; i<particleArray.length; i++){
        particleArray[i].update();
    }
}

init();
animate();

window.onresize = function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
}

setInterval(function(){
    mouse.x = undefined;
    mouse.y = undefined;
},1000);