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
const gra2 = ctx5.createLinearGradient(0, 0, canvas6.width, canvas5.height);
gra2. addColorStop(0, '#03488c');
gra2. addColorStop(0.6, '#023859');
gra2. addColorStop(1, '#011526');

ctx6.fillStyle = gra2;
ctx6.fillRect(0,0,canvas6.width,canvas6.height);
ctx6.shadowColor = 'seashell'; ctx6.shadowBlur = 30;
ctx6.strokeStyle = gra1
ctx6.strokeRect(150, 100, 300, 200);
