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