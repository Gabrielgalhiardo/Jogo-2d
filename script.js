let canvas = document.getElementById(`canvas`);
let ctx = canvas.getContext(`2d`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const valorGrama = canvas.height *0.3;
var horizontal = canvas.width*0.1;
var vertical = canvas.height*0.65;
var velocidade = 15;
var horizontalAreaDaMadeira = canvas.width-375;
var verticalAreaDaMadeira = canvas.height-470;
var invisivel = 0;
var ladoMochila = -20;
var ladoMadeira = -18;
var solWidth = -80;
var solHeight= 230;
var madeira = 0;


function drawScene(){
ctx.clearRect(0, 0, canvas.width, canvas.height);


//sol
ctx.beginPath();
ctx.fillStyle = `rgb(233, 255, 40)`;
ctx.fillRect(solWidth,canvas.height-solHeight,150,150);


//grama
ctx.beginPath();
ctx.fillStyle = `green`;
ctx.fillRect(0,canvas.height-valorGrama, canvas.width, valorGrama);

//madeira da arvore
ctx.beginPath();
ctx.fillStyle =`rgb(84, 46, 0)`;
ctx.fillRect(canvas.width-300,canvas.height-300,100,200);
ctx.strokeStyle = `rgb(42, 28, 2)`;
ctx.lineWidth = 4;
ctx.strokeRect(canvas.width-300,canvas.height-300,100,200);


//folha da arvore
const angulo = Math.PI /180;

ctx.beginPath();
ctx.arc(canvas.width-250,canvas.height-350, 120, angulo*0 ,angulo*360, false);
ctx.strokeStyle = `rgb(5, 73, 8)`;
ctx.lineWidth = 5;
ctx.fillStyle = `rgb(21, 156, 25)`;
ctx.fill();
ctx.stroke();


//area de pegar madeira
ctx.beginPath();
ctx.fillStyle =`rgba(201, 0, 0, 0)`;
ctx.fillRect(horizontalAreaDaMadeira,verticalAreaDaMadeira,250,370);
ctx.strokeStyle = `rgba(42, 28, 2, 0)`;
ctx.lineWidth = 4;
ctx.strokeRect(canvas.width-375,canvas.height-470,250,370);


//texto dica
if(horizontal  > horizontalAreaDaMadeira && vertical> verticalAreaDaMadeira){
    ctx.fillStyle = `black`; 
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center';
    ctx.fillText('Aperte espaço para pegar madeira',canvas.width-250,canvas.height-480);
}


//cabeça do boneco
ctx.beginPath();
ctx.fillStyle =`rgb(219, 143, 2)`;
ctx.fillRect(horizontal, vertical, 70, 70);
ctx.strokeStyle = `rgb(134, 88, 2)`;
ctx.lineWidth = 2;
ctx.strokeRect(horizontal, vertical, 70, 70);

//oho
ctx.beginPath();
ctx.fillStyle = `black`;
ctx.fillRect(horizontal + 15, vertical+23, 10,20);
//olho
ctx.beginPath();
ctx.fillStyle = `black`;
ctx.fillRect(horizontal + 45, vertical+23, 10,20);


//madeira
ctx.beginPath();
ctx.fillStyle=`rgb(84, 46, 0, ${invisivel})`;
ctx.fillRect(horizontal + ladoMadeira, vertical+17, 16,22);
//mochila
ctx.beginPath();
ctx.fillStyle=`red`;
ctx.fillRect(horizontal + ladoMochila, vertical+30, 20,25);



}
const keyboard = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    Space: false,
};


document.addEventListener('keydown', (event) => {
    if (keyboard.hasOwnProperty(event.code)) {
        keyboard[event.code] = true;
        console.log(`${event.code} pressionada`);
    }
});

document.addEventListener('keyup', (event) => {
    if (keyboard.hasOwnProperty(event.code)) {
        keyboard[event.code] = false;
        console.log(`${event.code} liberada`);
    }
});

function update() {
    if (keyboard.KeyW){
     vertical -= velocidade;  // Cima W
    }
    if (keyboard.KeyS){ 
        vertical += velocidade; // Baixo S

    } 
    if (keyboard.KeyA){
         horizontal -= velocidade; // Esquerda A
         ladoMochila = 69;
         ladoMadeira = 71;
        } 
    if (keyboard.KeyD){ 
        horizontal += velocidade;  // Direita D
        ladoMochila = -20;
        ladoMadeira = -18;
    }
    
    if(vertical>canvas.height-95){
        vertical -=velocidade;
    }
    if(vertical < 0){
        vertical +=velocidade;
        

    }
    if(horizontal>canvas.width-95){
        horizontal -=velocidade;
    }
    if(horizontal < 0){
        horizontal +=velocidade;

    }

    if(horizontal  > horizontalAreaDaMadeira && vertical> verticalAreaDaMadeira && keyboard.Space){
    
        if(invisivel){
            madeira +=1;
            solHeight +=20
            
            solWidth += 50;
        }
        
       console.log(madeira);
        invisivel = 1;
    }

    drawScene();
    requestAnimationFrame(update);
    // console.log(`Posição: X=${x}, Y=${y}`);
}

drawScene();
update();