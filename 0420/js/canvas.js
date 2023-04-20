// c1
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = 'cornflowerblue'
ctx1.shadowColor = 'grey'; ctx1.shadowBlur = 20; ctx1.shadowOffsetX = 20; ctx1.shadowOffsetY = 20;
ctx1.fillRect(150, 100, 300, 200)

// c2
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.moveTo(0, 0); ctx2.lineTo(600, 400);
ctx2.strokeStyle = 'orangered'
ctx2.stroke();

// c3
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d')
ctx3.moveTo(300, 50); ctx3.lineTo(50, 350); ctx3.lineTo(550,350); ctx3.lineTo(300, 50)
ctx3.fillStyle = 'cornflowerblue'
ctx3. fill();

// c4
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d')
ctx4.fillStyle = 'cornflowerblue';
ctx4.fillRect(150, 100, 200, 100);

ctx4.globalAlpha = .8;
ctx4.fillStyle = 'grey';
ctx4.fillRect(200, 150, 200, 100);

ctx4.globalAlpha = 1;
ctx4.fillStyle = 'cornflowerblue';
ctx4.fillRect(250, 200, 200, 100);

// c5
const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d')
const gra1 = ctx5.createLinearGradient(0, 0, canvas5.width, canvas5.height);
gra1.addColorStop(0, 'salmon');
gra1.addColorStop(1, 'cornflowerblue');

ctx5.fillStyle = gra1;
ctx5.fillRect(150, 100, 300, 200);

// c6
const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d')
const gra2 = ctx6.createLinearGradient(0, 0, canvas6.width, canvas6.height);
gra2. addColorStop(0, '#03488c');
gra2. addColorStop(0.6, '#023859');
gra2. addColorStop(1, '#011526');

ctx6.fillStyle = gra2;
ctx6.fillRect(0,0,canvas6.width,canvas6.height);
ctx6.shadowColor = 'seashell'; ctx6.shadowBlur = 30;
ctx6.strokeStyle = gra1
ctx6.strokeRect(150, 100, 300, 200);


// c7
const canvas7 = document.getElementById('canvas7');
const ctx7 = canvas7.getContext('2d')
const gra3 = ctx7.createRadialGradient(200, 100,5,300,200,200);
gra3.addColorStop(0, '#8c7503');
gra3.addColorStop(0.3, '#d1c1a9');
gra3.addColorStop(0.6, '#03588c');
gra3.addColorStop(1, '#011526');

// ctx7.globalAlpha = .6;
ctx7.fillStyle = gra3;
ctx7.fillRect(0, 0, canvas7.width, canvas7.height);

// c8
const canvas8 = document.getElementById('canvas8');
const ctx8 = canvas8.getContext('2d')
const myImg1 = document.getElementById('pat1');
const myPat1 = ctx8.createPattern(myImg1, 'repeat');

ctx8.fillStyle = myPat1;
ctx8.fillRect(150, 100, 300, 200);

// c9
const canvas9 = document.getElementById('canvas9');
const ctx9 = canvas9.getContext('2d');
const myImg2 = new Image();
myImg2.src = 'images/pattern2.png'
myImg2.onload = function(){
    const myPat2 = ctx9.createPattern(myImg2, 'repeat');
    ctx9.fillStyle = myPat2;
    ctx9.fillRect(0,0, canvas9.width, canvas9.height);
}

// 0414 과제
const canvas10 = document.getElementById('canvas10');
const ctx10 = canvas10.getContext('2d');

const gra5 = ctx10.createLinearGradient(0, 0, canvas10.width, canvas10.height);
gra5.addColorStop(0, 'yellow')
gra5.addColorStop(0.3, 'orange');
gra5.addColorStop(0.6, 'crimson')
gra5.addColorStop(1, 'darkmagenta');


const myImg3 = new Image();
myImg3.src = 'images/pattern3.png'
myImg3.onload = function(){
    const myPat3 = ctx10.createPattern(myImg3, 'repeat');
    ctx10.fillStyle = myPat3;
    ctx10.fillRect(0,0, canvas10.width, canvas10.height);

    ctx10.moveTo(300, 70); ctx10.lineTo(450, 210); ctx10.lineTo(405,210); ctx10.lineTo(405, 330); ctx10.lineTo(330, 330); ctx10.lineTo(330,240); ctx10.lineTo(270, 240); ctx10.lineTo(270, 330); ctx10.lineTo(195,330); ctx10.lineTo(195, 210); ctx10.lineTo(150, 210); ctx10.lineTo(150, 210);

    ctx10.fillStyle = gra5;
    ctx10. fill();
}

// c11
const canvas11 = document.getElementById('canvas11');
const ctx11 = canvas11.getContext('2d');
ctx11.lineWidth = 20; ctx11.strokeStyle= 'coral';
ctx11.globalAlpha = .5;
ctx11.setLineDash([20,40,60,80])


ctx11.moveTo(50,100); ctx11.lineTo(550, 100);
ctx11.lineCap = 'butt';
ctx11.stroke();

ctx11.moveTo(50,200); ctx11.lineTo(550,200);
ctx11.lineCap = 'round';
ctx11.stroke();

ctx11.moveTo(50,300); ctx11.lineTo(550,300);
ctx1.lineCap = 'square';
ctx11.stroke();

// c12
const canvas12 = document.getElementById('canvas12');
const ctx12 = canvas12.getContext('2d');
ctx12.lineWidth = 20; ctx12.lineCap = 'round';
ctx12.strokeStyle = gra3;

ctx12.beginPath();
ctx12.moveTo(50,300); ctx12.lineTo(100, 100); ctx12.lineTo(150, 300);
ctx12.lineJoin = 'miter';
ctx12.stroke();

ctx12.beginPath();
ctx12.moveTo(250,300); ctx12.lineTo(300, 100); ctx12.lineTo(350, 300);
ctx12.lineJoin = 'round';
ctx12.stroke();

ctx12.beginPath();
ctx12.moveTo(450,300); ctx12.lineTo(500, 100); ctx12.lineTo(550, 300);
ctx12.lineJoin = 'bevel';
ctx12.stroke();

// c13
const canvas13 = document.getElementById('canvas13');
const ctx13 = canvas13.getContext('2d');
ctx13.fillStyle = gra3;
ctx13.fillRect(150,100,300,200)
ctx13.clearRect(200,150,50,50)

// c14
const canvas14 = document.getElementById('canvas14');
const ctx14 = canvas14.getContext('2d');ctx14.rect(50,50,300,200)
ctx14.fillStyle = gra1;
ctx14.fill();

ctx14.beginPath();
ctx14.moveTo(250,150); ctx14.lineTo(500,150); ctx14.lineTo(300,350);
ctx14.fillStyle = gra3;
ctx14.fill();

// c15
const canvas15 = document.getElementById('canvas15');
const ctx15 = canvas15.getContext('2d');
ctx15.lineWidth = 8; 
ctx15.lineCap = 'round';
ctx15.lineJoin = 'round';
ctx15.strokeStyle = gra3;
ctx15.setLineDash([20]);

ctx15.beginPath();
ctx15.moveTo(50,50); ctx15.lineTo(50,350); ctx15.lineTo(250,350);
ctx15.stroke();

ctx15.beginPath();
ctx15.moveTo(350,50); ctx15.lineTo(350,350); ctx15.lineTo(550,350);
ctx15.closePath();
ctx15.stroke();

// c16
const canvas16 = document.getElementById('canvas16');
const ctx16 = canvas16.getContext('2d');
ctx16.moveTo(300,50); ctx16.lineTo(50,350); ctx16.lineTo(550,350);
ctx16.closePath();
ctx16.clip();

// ctx16.globalAlpha = .5;
ctx16.fillStyle = gra1;
ctx16.fillRect(0,0,canvas16.width,canvas16.height);
ctx16.fillStyle = myPat1;
ctx16.fillRect(0,canvas16.height/2,canvas16.width,canvas16.height/2);

// c17
const canvas17 = document.getElementById('canvas17');
const ctx17 = canvas17.getContext('2d');
ctx17.beginPath();
ctx17.moveTo(50, 120); ctx17.lineTo(150,100);
ctx17.quadraticCurveTo(300,400,450,100);
ctx17.lineTo(550, 80); ctx17.lineTo(550, 300); ctx17.lineTo(50,350);
ctx17.closePath();
ctx17.lineWidth = 5; ctx17.lineJoin = 'round'; ctx17.lineCap = 'round';
ctx17.setLineDash([10]);
ctx17.strokeStyle = gra1;
ctx17.stroke();

// c18
const canvas18 = document.getElementById('canvas18');
const ctx18 = canvas18.getContext('2d');
ctx18.beginPath();
ctx18.moveTo(50, 100);
ctx18.bezierCurveTo(50, 450,550,450,550,100);
ctx18.bezierCurveTo(550,300,50,300,50,100);
ctx18.lineWidth = 3;
ctx18.shadowColor = 'red';
ctx18.shadowBlur = 20;
ctx18.fillStyle = gra5;
ctx18.fill();

// c19
const canvas19 = document.getElementById('canvas19');
const ctx19 = canvas19.getContext('2d');
const gra6 = ctx19.createRadialGradient(200, 100,5,300,200,200);
gra6. addColorStop(0,'rgb(255, 252, 207)');
gra6. addColorStop(0.3, 'rgb(132, 241, 255)');
gra6. addColorStop(0.7, 'rgb(0, 183, 255)');
gra6. addColorStop(1, 'rgb(0, 102, 218)');

const myImg4 = new Image();
myImg4.src = 'images/pattern4.png'
myImg4.onload = function(){
    const myPat4 = ctx19.createPattern(myImg4, 'repeat');

    ctx19.beginPath();
    ctx19.moveTo(0, 100); 
    ctx19.bezierCurveTo(0,50,100,50,100,100);
    ctx19.bezierCurveTo(100,150,200,150,200,100);
    ctx19.bezierCurveTo(200,50,300,50,300,100);
    ctx19.bezierCurveTo(300,150,400,150,400,100);
    ctx19.bezierCurveTo(400,50,500,50,500,100);
    ctx19.bezierCurveTo(500,150,600,150,600,100);
    ctx19.lineTo(600,300);
    ctx19.bezierCurveTo(600,250,500,250,500,300);
    ctx19.bezierCurveTo(500,350,400,350,400,300);
    ctx19.bezierCurveTo(400,250,300,250,300,300);
    ctx19.bezierCurveTo(300,350,200,350,200,300);
    ctx19.bezierCurveTo(200,250,100,250,100,300);
    ctx19.bezierCurveTo(100,350,0,350,0,300);
    ctx19.closePath();

    ctx19.fillStyle = gra6;
    ctx19. fill();

    ctx19.fillStyle = myPat4;
    ctx19. fill();
}

// c20
const canvas20 = document.getElementById('canvas20');
const ctx20 = canvas20.getContext('2d');
ctx20.beginPath();
ctx20.arc(300,200,100,0,Math.PI*1.5);
ctx20.stroke();

// c21
const canvas21 = document.getElementById('canvas21');
const ctx21 = canvas21.getContext('2d');
ctx21.beginPath();
ctx21.moveTo(300,200);
ctx21.arc(300,200,100,0,Math.PI*0.3);
ctx21.closePath();
ctx21.stroke();


// c22
const canvas22 = document.getElementById('canvas22');
const ctx22 = canvas22.getContext('2d');

ctx22.lineWidth = 8; ctx22.lineCap = 'round'; ctx22.lineJoin = 'round'; ctx22.strokeStyle = 'sienna';

ctx22.beginPath();
ctx22.moveTo(420,200);
ctx22.arc(300,200,120,0,Math.PI,true);
ctx22.lineTo(180,300);
ctx22.arcTo(180, 350, 130, 350, 30);
ctx22.lineTo(450, 350);
ctx22.arcTo(420, 350, 420, 300, 30);
ctx22.closePath();
ctx22.fillStyle = 'darkorange'
ctx22.fill();
ctx22.stroke();

ctx22.beginPath();
ctx22.moveTo(400,200);
ctx22.arc(300,200,100,0,Math.PI*2);
ctx22.fillStyle = 'gold'
ctx22.fill();
ctx22.stroke();

ctx22.beginPath();
ctx22.moveTo(285,180);
ctx22.arc(250,180,35,0,Math.PI*2,true);
ctx22.lineTo(315,180);
ctx22.moveTo(385,180);
ctx22.arc(350,180,35,0,Math.PI*2,true);
ctx22.stroke();
ctx22.fillStyle = '#fff'
ctx22.globalAlpha = 0.8;
ctx22.fill();

ctx22.moveTo(350,230);
ctx22.arc(300,230,50,0,Math.PI);
ctx22.closePath();
ctx22.moveTo(270,180);
ctx22.arc(250,180,20,0,Math.PI,true);
ctx22.moveTo(370,180);
ctx22.arc(350,180,20,0,Math.PI,true);
ctx22.stroke();

// c23
const canvas23 = document.getElementById('canvas23');
const ctx23 = canvas23.getContext('2d');
ctx23.beginPath();
ctx23.moveTo(150,100);
ctx23.lineTo(450,100);
ctx23.arcTo(500,100,500,150,50);
ctx23.lineTo(500,250);
ctx23.arcTo(500,300,450,300,50);
ctx23.lineTo(150,300);
ctx23.arcTo(100,300,100,250,50);
ctx23.lineTo(100,150);
ctx23.arcTo(100,100,150,100,50);
ctx23.setLineDash([25]);
ctx23.lineWidth = 15; ctx23.lineCap = 'round'; ctx23.strokeStyle = gra5
ctx23.shadowBlur = 10; ctx23.shadowColor = 'orange'
ctx23.stroke();

// c24
const canvas24 = document.getElementById('canvas24');
const ctx24 = canvas24.getContext('2d');
ctx24.rect(100,100,400,200);
if(ctx24.isPointInPath(150,150)){
    ctx24.stroke();
}

// c25
const canvas25 = document.getElementById('canvas25');
const ctx25 = canvas25.getContext('2d');
const w25 = canvas25.width;
const h25 = canvas25.height;

ctx25.fillStyle = '#010326'; ctx25.fillRect(0,0,w25/2,h25/2);
ctx25.fillStyle = '#f2b705'; ctx25.fillRect(w25/2,0,w25/2,h25/2);
ctx25.fillStyle = '#e58900'; ctx25.fillRect(0,h25/2,w25/2,h25/2);
ctx25.fillStyle = '#024059'; ctx25.fillRect(w25/2,h25/2,w25/2,h25/2);

ctx25.fillStyle = '#fff'; ctx25.globalAlpha = .2;
for (let i=0; i<7; i++){
    ctx25.beginPath();
    ctx25.arc(w25/2,h25/2,30*i,0,Math.PI*2);
    ctx25.fill();
}

// c26

// c27
const canvas27 = document.getElementById('canvas27');
const ctx27 = canvas27.getContext('2d');

ctx27.lineCap = 'round'; ctx27.strokeStyle = gra3;
for(let i=0; i<10; i++){
    ctx27.lineWidth = 2+i;
    ctx27.setLineDash([10*i]);
    ctx27.beginPath();
    ctx27.moveTo(100 + i*50, 50);
    ctx27.lineTo(50 + i*50, 350);
    ctx27.stroke();
}