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
const r25 = 30;

ctx25.fillStyle = '#010326'; ctx25.fillRect(0,0,w25/2,h25/2);
ctx25.fillStyle = '#f2b705'; ctx25.fillRect(w25/2,0,w25/2,h25/2);
ctx25.fillStyle = '#e58900'; ctx25.fillRect(0,h25/2,w25/2,h25/2);
ctx25.fillStyle = '#024059'; ctx25.fillRect(w25/2,h25/2,w25/2,h25/2);

ctx25.fillStyle = '#fff'; ctx25.globalAlpha = .2;
for (let i=0; i<Math.floor((h25/2)/r25); i++){
    ctx25.beginPath();
    ctx25.arc(w25/2,h25/2,r25*i,0,Math.PI*2);
    ctx25.fill();
}

console.log(Math.floor((h25/2)/r25));

// c26
const canvas26 = document.getElementById('canvas26');
const ctx26 = canvas26.getContext('2d');
const w26 = canvas26.width;
const h26 = canvas26.height;

ctx26.fillStyle = '#6CC5C6'; ctx26.fillRect(0,0,w26/2,h26/2);
ctx26.fillStyle = '#DEF0EE'; ctx26.fillRect(w26/2,0,w26/2,h26/2);
ctx26.fillStyle = '#025959'; ctx26.fillRect(0,h26/2,w26/2,h26/2);
ctx26.fillStyle = '#D1645D'; ctx26.fillRect(w26/2,h26/2,w26/2,h26/2);

ctx26.fillStyle = '#010326'; ctx26.globalAlpha = .25;
for (let i=0; i<7; i++){
    ctx26.beginPath();
    ctx26.rect((w26/2)-(40*i),(h26/2)-(30*i),80*i,60*i);
    ctx26.fill();
}

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

// c28
const canvas28 = document.getElementById('canvas28');
const ctx28 = canvas28.getContext('2d');

const path1 = new Path2D();
path1.rect(50,100,200,200);

const path2 = new Path2D(path1);
path2.moveTo(550,200);
path2.arc(450,200,100,0,2*Math.PI);

ctx28.fillStyle = gra1;
ctx28.fill(path2);
ctx28.lineWidth = 20; ctx28.strokeStyle = 'rgba(0,0,0,0.5)';
ctx28.stroke(path2);
const path3 = new Path2D("M10 10 h 80 v 80 h -80 Z");
ctx28.fill(path3);

// c29
const canvas29 = document.getElementById('canvas29');
const ctx29 = canvas29.getContext('2d');

ctx29.strokeRect(50,50,100,100);
ctx29.scale(2,2);
ctx29.strokeStyle = 'red'; ctx29.strokeRect(50,50,100,100);
ctx29.strokeStyle = 'blue'; ctx29.strokeRect(100,100,100,100);
ctx29.scale(2,2);
ctx29.strokeStyle = 'green'; ctx29.strokeRect(50,50,100,100);

// c30
const canvas30 = document.getElementById('canvas30');
const ctx30 = canvas30.getContext('2d');

ctx30.rotate(45*(Math.PI/180));
ctx30.fillStyle = 'rgba(0,0,0,.5)';
ctx30.fillRect(250,150,100,100);

// c31
const canvas31 = document.getElementById('canvas31');
const ctx31 = canvas31.getContext('2d');

ctx31.globalAlpha= .5;
ctx31.fillRect(0,0,100,50);

ctx31.translate(100,100);
ctx31.fillStyle = 'coral'; ctx31.fillRect(0,0,100,50);

ctx31.translate(-100, -100);
ctx31.fillStyle = 'cornflowerblue';
ctx31.fillRect(100,50,100,50);

// c32
const canvas32 = document.getElementById('canvas32');
const ctx32 = canvas32.getContext('2d');

ctx32.fillStyle = 'cornflowerblue'; ctx32.fillRect(150,50,300,300);
ctx32.save(); 

ctx32.fillStyle = 'coral'; ctx32.fillRect(200,100,200,200);
ctx32.save(); 

ctx32.fillStyle = 'bisque'; ctx32.fillRect(250,150,100,100);
ctx32.restore(); ctx32.fillRect(275,175,50,50);
ctx32.restore(); ctx32.fillRect(290,190,20,20);

// c33
const canvas33 = document.getElementById('canvas33');
const ctx33 = canvas33.getContext('2d');
ctx33.globalAlpha = .5;

ctx33.save();
ctx33.fillStyle = 'cornflowerblue'; ctx33.fillRect(150,150,100,100);
ctx33.rotate(25*(Math.PI/180));
ctx33.fillStyle = 'coral'; ctx33.fillRect(150,150,100,100);
ctx33.restore();

ctx33.fillStyle = 'cornflowerblue'; ctx33.fillRect(350,150,100,100);
ctx33.translate(400,200);
ctx33.rotate(25*(Math.PI/180));
ctx33.translate(-400,-200);
ctx33.fillStyle = 'coral'; ctx33.fillRect(350,150,100,100);

// c34
const canvas34 = document.getElementById('canvas34');
const ctx34 = canvas34.getContext('2d');

for(let i=0; i<canvas34.height/50; i++){
    for(let j=0; j<canvas34.width/50; j++){
        ctx34.save();
        ctx34.fillStyle = `rgb(${255-j*30},${i*30},180)`;
        ctx34.translate(50*j,50*i);
        ctx34.fillRect(10,10,30,30);
        ctx34.restore();
    }
}

// c35
const canvas35 = document.getElementById('canvas35');
const ctx35 = canvas35.getContext('2d');

for(let i=0; i<canvas35.height/50; i++){
    for(let j=0; j<canvas35.width/50; j++){
    ctx35.save();
    ctx35.fillStyle = `rgb(${255-j*20},${i*20},${i*70})`;
    ctx35.translate(50*j,50*i);
    ctx35.beginPath();
    ctx35.arc(25,25,15,0,2*Math.PI);
    ctx35.fill();
    ctx35.restore();
    }
}

// c36
const canvas36 = document.getElementById('canvas36');
const ctx36 = canvas36.getContext('2d');
ctx36.font = 'bold 7em Arial, sans-serif';
ctx36.fillStyle = gra3;
ctx36.fillText('Canvas',100,240);

// c37
const canvas37 = document.getElementById('canvas37');
const ctx37 = canvas37.getContext('2d');

ctx37.fillStyle = gra2;
ctx37.fillRect(0,0,canvas37.width,canvas37.height);
ctx37.font = 'bold 7em Arial, sans-serif';
ctx37.strokeStyle = gra1; ctx37.lineWidth = 2;
ctx37.setLineDash([5]); ctx37.lineCap = 'round';
ctx37.strokeText('Canvas',100,240);

// c38
const canvas38 = document.getElementById('canvas38');
const ctx38 = canvas38.getContext('2d');
const x38 = canvas38.width/2;
const y38 = canvas38.height/5;
const alignText = ['start','end','left','center','right']

ctx38.strokeStyle = 'red';
ctx38.moveTo(x38, 0); ctx38.lineTo(x38, canvas38.height);
ctx38.stroke();

ctx38.font = 'bold 20px Arial, sans-serif';
for(let i=0; i<alignText.length; i++){
    ctx38.textAlign = alignText[i];
    ctx38.fillText(alignText[i],x38,y38*(i+1)-30);
}

// ctx38.textAlign = 'start';
// ctx38.fillText('start',x38,40);
// ctx38.textAlign = 'end';
// ctx38.fillText('end',x38,120);
// ctx38.textAlign = left;
// ctx38.fillText('left',x38,200);
// ctx38.textAlign = 'center';
// ctx38.fillText('center', x38,280);
// ctx38.textalign = 'right';
// ctx38.fillText('right',x38,360);

// c39
const canvas39 = document.getElementById('canvas39');
const ctx39 = canvas39.getContext('2d');
const x39 = canvas39.width/5;
const y39 = canvas39.height/2;
const baselineText = ['top', 'bottom', 'middle','alphabetic','hanging'];

ctx39.strokeStyle='red';
ctx39.moveTo(0, y39); ctx39.lineTo(canvas39.width,y39);
ctx39.stroke();

ctx39.font = 'bold 20px Arial, sans-serif';
ctx39.textAlign = 'center';

for(let i=0; i<baselineText.length; i++){
    ctx39.textBaseline = baselineText[i];
    ctx39.fillText(baselineText[i],(x39*i)+60,y39);
}
// ctx39.textBaseline = 'top';
// ctx39.fillText('top',x39-60,y39)
// ctx39.textBaseline = 'bottom';
// ctx39.fillText('bottom',x39*2-60,y39);
// ctx39.textBaseline = 'middle';
// ctx39.fillText('middle',x39*3-60,y39);
// ctx39.textBaseline = 'alphabetic';
// ctx39.fillText('alphabetic',x39*4-60,y39);
// ctx39.textBaseline = 'hanging'
// ctx39.fillText('hanging',x39*5-60,y39);
// for문 업그레이드

// c40
const canvas40 = document.getElementById('canvas40');
const ctx40 = canvas40.getContext('2d');
const w40 = canvas40.width;
const h40 = canvas40.height;
const graColor = ['rgba(0,0,0,.7)','rgba(0,0,0,.9)','cornflowerblue','salmon']
const graBg = ctx40.createLinearGradient(w40,0,0,h40);
graBg.addColorStop(0,graColor[0]);
graBg.addColorStop(0.4,graColor[1]);
graBg.addColorStop(0.8,graColor[0]);
graBg.addColorStop(1,graColor[1]);
const gra7 = ctx40.createLinearGradient(0,0,w40,h40);
gra7.addColorStop(0,graColor[2]);
gra7.addColorStop(0.3, graColor[3]);
gra7.addColorStop(0.6,graColor[2]);
gra7.addColorStop(1,graColor[3]);

ctx40.fillStyle = graBg;
ctx40.fillRect(0,0,w40,h40);

ctx40.font = 'bold 7em Poppins, sans-serif';
ctx40.textAlign = 'center'; ctx40.textBaseline = 'middle';
ctx40.lineWidth = 3;
ctx40.strokeStyle = gra7;
ctx40.strokeText('Dam',w40/2,h40/2);

// c41
const canvas41 = document.getElementById('canvas41');
const ctx41 = canvas41.getContext('2d');
const txt = 'Canvas';
ctx41.textAlign = 'center'
ctx41.font = "60px Arial, sans-serif";
ctx41.fillText(txt,300,150);
ctx41.fillText(ctx41.measureText(txt).width,300,250);

// c42
const canvas42 = document.getElementById('canvas42');
const ctx42 = canvas42.getContext('2d');
const myImg5 = document.getElementById('img1');
ctx42.drawImage(myImg5,50,50);

// c43
const canvas43 = document.getElementById('canvas43');
const ctx43 = canvas43.getContext('2d');
const myImg6 = new Image();
const myImg7 = new Image();
const myImg8 = new Image();
myImg6.src = 'images/smile1.png';
myImg7.src = 'images/smile2.png';
myImg8.src = 'images/smile3.png';
myImg6.onload=function(){
    ctx43.drawImage(myImg6,100,50);
    ctx43.drawImage(myImg7,250,150);
    ctx43.drawImage(myImg8,400,250);
}

// c44
const canvas44 = document.getElementById('canvas44');
const ctx44 = canvas44.getContext('2d');
const myImg10 = new Image();
myImg10.src = 'https://ssl.pstatic.net/melona/libs/1444/1444994/8e2f02e6df8e38d854ce_20230419144547507.jpg';
const myImg10x = myImg10.width;
const myImg10y = myImg10.height;
console.log(myImg10x,myImg10y);
myImg10.onload = function(){
    ctx44.drawImage(myImg10,(canvas44.width-myImg10x/3)/2,(canvas44.height-myImg10y/3)/2,myImg10x/3,myImg10y/3);
}

// c45
const canvas45 = document.getElementById('canvas45');
const ctx45 = canvas45.getContext('2d');
const svgSize = 300;
const myImg11 = new Image();
myImg11.src= 'images/favorite_black_24dp.svg'
console.log(myImg11.width,myImg11.height);
myImg11.onload = function(){
    ctx45.drawImage(myImg11,(canvas45.width-svgSize)/2,(canvas45.height-svgSize)/2,svgSize,svgSize);
}

// c46
const canvas46 = document.getElementById('canvas46');
const ctx46 = canvas46.getContext('2d');
const myImg12 = new Image();
myImg12.src = 'images/cb62dd42-fbc0-40d7-84e2-e8de37722678.jpeg'
// ctx46.globalAlpha = .5;
myImg12.onload = function(){
    ctx46.drawImage(myImg12,150,100,300,300,(canvas46.width-200)/2,(canvas46.height-200)/2,200,200);
}

// c47
const canvas47 = document.getElementById('canvas47');
const ctx47 = canvas47.getContext('2d');
const imgData1 = ctx47.createImageData(100,100);
console.log(imgData1.data);

imgData1.data[0] = 255;
imgData1.data[1] = 0;
imgData1.data[2] = 0;
imgData1.data[3] = 255;

imgData1.data[4] = 0;
imgData1.data[5] = 255;
imgData1.data[6] = 0;
imgData1.data[7] = 255;

imgData1.data[8] = 0;
imgData1.data[9] = 0;
imgData1.data[10] = 255;
imgData1.data[11] = 255;

ctx47.putImageData(imgData1,100,100);

// c48
const canvas48 = document.getElementById('canvas48');
const ctx48 = canvas48.getContext('2d');
const imgData2 = ctx48.createImageData(100,100);

for(let i=0; i<imgData2.data.length; i+=4){
    imgData2.data[0+i] = 255;
    imgData2.data[1+i] = 0;
    imgData2.data[2+i] = 0;
    imgData2.data[3+i] = 100;
}
ctx48.putImageData(imgData2,100,100);

// c49
const canvas49 = document.getElementById('canvas49');
const ctx49 = canvas49.getContext('2d');
const imgData3 = ctx49.createImageData(400,300);

for(let i=0; i<imgData3.data.length; i+=50){
    imgData3.data[0+i] = 255;
    imgData3.data[1+i] = 0;
    imgData3.data[2+i] = 0;
    imgData3.data[3+i] = 100;
}
ctx49.putImageData(imgData3,100,50);

// c50 
const canvas50 = document.getElementById('canvas50');
const ctx50 = canvas50.getContext('2d');
ctx50.fillStyle = 'cornflowerblue';
ctx50.fillRect(200,50,200,100);

const imgData4 = ctx50.getImageData(100,50,200,100);
ctx50.putImageData(imgData4,100,200);

// c51
const canvas51 = document.getElementById('canvas51');
const ctx51 = canvas51.getContext('2d');
const myImg13 = document.getElementById('img2');
ctx51.drawImage(myImg13,0,0);

const imgData5 = ctx51.getImageData(0,0,canvas51.width,canvas51.height);

for(let i=0; i<imgData5.data.length; i+=4){
    imgData5.data[0+i] = 255 - imgData5.data[0+i];
    imgData5.data[1+i] = 255 - imgData5.data[1+i];
    imgData5.data[2+i] = 255 - imgData5.data[2+i];
}
ctx51.putImageData(imgData5,0,0);

// c52
const canvas52 = document.getElementById('canvas52');
const ctx52 = canvas52.getContext('2d');
const myImg14 = document.getElementById('img3');
ctx52.drawImage(myImg14,0,0);

const imgData7 = ctx52.getImageData(0,0,canvas52.width,canvas52.height);

for(let i=0; i<imgData7.data.length; i+=4){
    imgData7.data[0+i] = 255 - imgData7.data[0+i];
    imgData7.data[1+i] = 255 - imgData7.data[1+i];
    imgData7.data[2+i] = 255 - imgData7.data[2+i];
}
ctx52.putImageData(imgData7,0,0);

ctx52.font = 'bold 7em Poppins, sans-serif';
ctx52.textAlign = 'center'; ctx52.textBaseline = 'middle';
ctx52.fillStyle = '#fff';
ctx52.fillText('Dam.',300,200);



// c53
const canvas53 = document.getElementById('canvas53');
const ctx53 = canvas53.getContext('2d');

ctx53.fillStyle = 'coral';
ctx53.fillRect(0,0,200,200);

ctx53.fillStyle = 'cornflowerblue';
ctx53.fillRect(20,20,160,160);

const imgData6 = ctx53.getImageData(0,0,200,200);
ctx53.putImageData(imgData6,250,150,50,50,100,100);

// c54
const canvas54 = document.getElementById('canvas54');
const ctx54 = canvas54.getContext('2d');
let x=0; let y=0;
ctx54.fillStyle = gra5;

moveRect();
function moveRect(){
    ctx54.clearRect(0,0,canvas54.width,canvas54.height);
    ctx54.fillRect(x+80,y,50,50);
    x+=3; y+=3;
    if(y >= canvas54.height){
        x=0; y=0;
    }
    requestAnimationFrame(moveRect);
}

// c55
const canvas55 = document.getElementById('canvas55');
const ctx55 = canvas55.getContext('2d');
let x55=0; y55=0;

blur();
function blur(){
    ctx55.fillStyle = 'rgba(0,0,0,.1)'
    ctx55.fillRect(0,0,canvas55.width,canvas55.height);
    ctx55.fillStyle = gra5;
    ctx55.beginPath();
    ctx55.arc(x55+100,y55,50,0,Math.PI*2);
    ctx55.fill();
    x55+=3; y55+=3;
    if(y55 >= canvas55.height+100){
        x55=0; y55=0;
    }
    requestAnimationFrame(blur);
}

// c56
const canvas56 = document.getElementById('canvas56');
const ctx56 = canvas56.getContext('2d');
let num56 = 1;

rotateRect();
function rotateRect(){
    ctx56.save();
    ctx56.fillStyle = 'rgba(0,0,0,.1)';
    ctx56.fillRect(0,0,canvas56.width,canvas56.height);
    ctx56.fillStyle = gra6;
    ctx56.translate(canvas56.width/2,canvas56.height/2);
    ctx56.rotate((Math.PI/180)*num56);
    ctx56.translate(-canvas56.width/2,-canvas56.height/2);
    ctx56.fillRect(250,100,100,200);
    ctx56.restore();   
    num56 += 2;
    if(num56>=360){
        num56 = 1;
    }
    requestAnimationFrame(rotateRect);
}

// c57
const canvas57 = document.getElementById('canvas57');
const ctx57 = canvas57.getContext('2d');
let num57 = 1;

rotateArc();
function rotateArc(){
    ctx57.save();
    ctx57.fillStyle = 'rgba(0,0,0,.2)';
    ctx57.fillRect(0,0,canvas57.width,canvas57.height);
    ctx57.fillStyle = gra7;
    ctx57.fill();
    
    ctx57.beginPath();
    ctx57.arc(canvas57.width/2,canvas57.height/2,80,0,Math.PI*2);
    ctx57.translate(canvas57.width/2-num57,canvas57.height/2-num57);
    ctx57.fill();
    ctx57.restore();

    ctx57.save();
    ctx57.beginPath();
    ctx57.translate(canvas57.width/2,canvas57.height/2);
    ctx57.fill();
    ctx57.rotate((Math.PI/180)*num57);
    ctx57.translate(-200,-120);
    ctx57.fillStyle = '#fff'
    ctx57.beginPath();
    ctx57.arc(canvas57.width / 2, canvas57.height / 2, 30, 0, Math.PI * 2);
    ctx57.fill();
    
    ctx57.restore();
    num57 += 2;
    if(num57>=360){
        num57 = 1;
    }
    requestAnimationFrame(rotateArc);
}

// c59
const canvas59 = document.getElementById('canvas59');
const ctx59 = canvas59.getContext('webgl');
ctx59.clearColor(0.1,0,1,0.2);
ctx59.clear(ctx59.COLOR_BUFFER_BIT);



// c58
$('#canvas58').drawArc({
    fillStyle: 'coral',
    x: 150, y:150,
    radius: 80
}).drawArc({
    fillStyle: 'cornflowerblue',
    x: 280, y: 200,
    radius: 150
}).drawArc({
    fillStyle: 'bisque',
    x: 400, y: 100,
    radius: 50
}).drawPolygon({
    fillStyle: '#36c',
    strokeStyle: 'rgb(0,0,0,.5)',
    strokeWidth: 20,
    x: 450, y: 250,
    radius: 50,
    sides: 3,
    concavity: -0.5,
    rotate: 170
})

// three

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, canvas59.width/ canvas59.height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( canvas59.width, canvas59.height );
document.getElementById('three').appendChild(renderer.domElement);
document.getElementById('three').querySelector('canvas').style.display = 'inline-block';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'coral' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.03;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

// ripples
$('#rip').ripples({
	resolution: 512,
	dropRadius: 10,
	perturbance: 0.04,
});