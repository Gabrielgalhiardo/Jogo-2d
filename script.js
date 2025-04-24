let canvas = document.getElementById(`canvas`);
let ctx = canvas.getContext(`2d`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const valorGrama = canvas.height *0.3;
var horizontal = canvas.width*0.1;
var vertical = canvas.height*0.65;
var velocidade = 5;
var horizontalAreaDaMadeira = canvas.width-375;
var verticalAreaDaMadeira = canvas.height-470;
var invisivel = 0;
var ladoMochila = -20;
var ladoMadeira = -18;
var solWidth = 0;
var solHeight= canvas.height-valorGrama;
var madeira = 0;
var meioDia = 0;
var horizontalAreaGuardarMadeira = 250;
var verticalAreaGuardarMadeira = valorGrama + 220;
const valorHeight = (canvas.height)/20 ;
const valorWidth = canvas.width/20;


function drawScene(){
ctx.clearRect(0, 0, canvas.width, canvas.height);


//sol
ctx.beginPath();
ctx.fillStyle = `rgb(233, 255, 40)`;
ctx.fillRect(solWidth,solHeight,150,150);


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

//texto dica pegar madeira
if(horizontal > horizontalAreaDaMadeira && horizontal < horizontalAreaDaMadeira + 250 &&
    vertical > verticalAreaDaMadeira && vertical < verticalAreaDaMadeira + 370){
    ctx.fillStyle = `black`; 
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center';
    ctx.fillText('Aperte espaço para pegar madeira',canvas.width-250,canvas.height-480);
}

//parede casa
ctx.beginPath();
ctx.fillStyle = `rgb(85, 57, 7)`;
ctx.fillRect(180,valorGrama +200,300,220)

//telhado casa
ctx.beginPath();
ctx.moveTo(580,valorGrama + 210);
ctx.lineTo(330, valorGrama + 90);
ctx.lineTo(90, valorGrama + 210);
ctx.fillStyle = `rgb(45, 31, 8)`;
ctx.fill();


//porta casa
ctx.beginPath();
ctx.fillStyle = `rgb(35, 26, 10)`;
ctx.fillRect(350,valorGrama +260,100,160);

//maçaneta casa
ctx.beginPath();
ctx.fillStyle = `rgb(153, 99, 6)`;
canvas.width-250,canvas.height-350, 120, angulo*0 ,angulo*360, false
ctx.arc(430, valorGrama + 350, 11, angulo*0, angulo*360, false);
ctx.fill();

// dica para guardar madeira
if (horizontal > horizontalAreaGuardarMadeira-80 && horizontal < horizontalAreaGuardarMadeira + 230 &&
    vertical > verticalAreaGuardarMadeira -30 && vertical < verticalAreaGuardarMadeira + 340) {
    ctx.fillStyle = `black`;
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Aperte espaço para guardar madeira', horizontalAreaGuardarMadeira + 100, verticalAreaGuardarMadeira - 150);
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


//tabela Info
ctx.beginPath();
ctx.fillStyle = `rgb(64, 63, 63)`;
roundedRect(ctx, 0, canvas.height * 0.4, 150, 75, 10);

//madeiras Total
ctx.fillStyle = `white`;
ctx.font = '20px Arial';
ctx.textAlign = `center`;
ctx.fillText(`Lenhas: ${madeira} 🪵`,75,canvas.height * 0.46)




}

function roundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
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
 
    if(horizontal > horizontalAreaDaMadeira && horizontal < horizontalAreaDaMadeira + 250 && vertical > verticalAreaDaMadeira && vertical < verticalAreaDaMadeira + 370 &&  keyboard.Space){
    
        if(invisivel == 0){
            if (meioDia >= 10){
                meioDia +=1;
                madeira +=1;
                solHeight += valorHeight;
                solWidth += valorWidth;
            }else{
                meioDia +=1;
                madeira +=1;
                solHeight -= valorHeight;
                solWidth += valorWidth;
            }
            if(meioDia >= 20){
                canvas.style.backgroundColor = `rgb(5, 2, 86)`;
            }
            if(meioDia == 30){
                solHeight = canvas.height-valorGrama;
                solWidth = 0;
                canvas.style.backgroundColor = `rgb(88, 88, 235)`;

                meioDia = 0;
            }
            
            invisivel = 1;
           
        }
 
    }
    if (horizontal > horizontalAreaGuardarMadeira-80 && horizontal < horizontalAreaGuardarMadeira + 230 &&
        vertical > verticalAreaGuardarMadeira -30 && vertical < verticalAreaGuardarMadeira + 340 && keyboard.Space) {
        if (invisivel == 1) {
            invisivel = 0;    
        }
    }

    drawScene();
    requestAnimationFrame(update);
}

drawScene();
update();