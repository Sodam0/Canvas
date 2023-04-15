
// plus
const plus = document.getElementById('plus');
const add = plus.getContext('2d');

add.moveTo(270, 50); add.lineTo(330, 50);
add.lineTo(330, 170); add.lineTo(450, 170);
add.lineTo(450, 230); add.lineTo(330, 230); add.lineTo(330, 350); add.lineTo(270, 350); add.lineTo(270, 230); add.lineTo(150, 230); add.lineTo(150, 170); add.lineTo(270, 170);

add.fillStyle = 'orangered'
add.fill();

// home
const home = document.getElementById('home');
const main = home.getContext('2d');

main.moveTo(300, 70); main.lineTo(450, 210); main.lineTo(405,210); main.lineTo(405, 330); main.lineTo(330, 330); main.lineTo(330,240); main.lineTo(270, 240); main.lineTo(270, 330); main.lineTo(195,330); main.lineTo(195, 210); main.lineTo(150, 210);

const gra = main.createLinearGradient(0, 0, home.width, home.height);
gra.addColorStop(0, 'yellow')
gra.addColorStop(0.3, 'orange');
gra.addColorStop(0.6, 'crimson')
gra.addColorStop(1, 'darkmagenta');

main.fillStyle = gra;
main.fill();
 