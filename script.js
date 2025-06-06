let canvas = document.getElementById(`canvas`);
let ctx = canvas.getContext(`2d`);

canvas.width = 2000;
canvas.height = window.innerHeight;
const valorGrama = canvas.height *0.3;
var horizontal = canvas.width*0.1;
var vertical = canvas.height*0.65;
var velocidade = 10;
var horizontalAreaDaMadeira = canvas.width-375;
var verticalAreaDaMadeira = canvas.height-470;
var invisivel = 0;
var ladoMochila = -20;
var ladoMadeira = -18;
var ladoMachado = 80;
var rotacaoMachado = 5;

var solWidth = 0;
var solHeight= canvas.height-valorGrama;
var madeira = 0;
var meioDia = 0;
var horizontalAreaGuardarMadeira = 250;
var verticalAreaGuardarMadeira = valorGrama + 220;
const valorHeight = (canvas.height)/20 ;
const valorWidth = canvas.width/20;
var item1Preco = `20`;
var item2Preco = `130`;
var item3Preco = `500`;

let ladoLinha1 =76;
let ladoLinha2 = 120;
let ladoLinha3 = 110;


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

//cabo Do Machado
ctx.save();
ctx.translate(horizontal + ladoMachado + 5, vertical + 30); 
ctx.rotate(Math.PI / rotacaoMachado);// roda o cabo
ctx.fillStyle =`${caboOn}`;
ctx.fillRect(-5, -20, 10, 55);
ctx.restore();

//ponta do machado

ctx.beginPath();
ctx.moveTo(horizontal + ladoLinha1, vertical + 18);
ctx.lineTo(horizontal + ladoLinha2,vertical +32);
ctx.lineTo(horizontal + ladoLinha3, vertical +50);
ctx.fillStyle = `${tipoMachado}`;
ctx.fill();

}

const keyboard = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    Space: false,

    //mover com as setas
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
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
        if (keyboard.KeyW || keyboard.ArrowUp){
        vertical -= velocidade;  // Cima W
        }
        if (keyboard.KeyS || keyboard.ArrowDown){ 
            vertical += velocidade; // Baixo S
            
        } 
        if (keyboard.KeyA || keyboard.ArrowLeft){
            horizontal -= velocidade; // Esquerda A
            ladoMochila = 69;
            ladoMadeira = 71;
            ladoMachado = -20;
            rotacaoMachado = -5;
            ladoLinha1 = -10;
            ladoLinha2 = -50;
            ladoLinha3 = -40;

            } 
        if (keyboard.KeyD || keyboard.ArrowRight){ 
            horizontal += velocidade;  // Direita D
            ladoMochila = -20;
            ladoMadeira = -18;
            ladoMachado = 80;
            rotacaoMachado = 5;
            ladoLinha1 =76;
            ladoLinha2 = 120;
            ladoLinha3 = 110;
            
        }

        //nao deixa o botão ficar sendo apertado com spaço e enter
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => btn.blur());
        });

        
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
                    if(machadoEquipado === 3){
                        madeira += 5000
                    }else if(machadoEquipado === 2){
                        madeira +=70;
                    }else if(machadoEquipado === 1){
                        madeira += 30;
                    }else{
                        madeira += 10;
                    }
                }
            }
            
        drawScene();
        requestAnimationFrame(update);

        window.scrollTo({
            left: horizontal - window.innerWidth / 2 + 35,
            top: 0,
            behavior: 'auto'
        });
    }
    let divStatus = document.getElementById(`status`);
function updateStatus(){
    divStatus.innerText = `Lenha: ${madeira}`

    if(madeira>=item1Preco){
        item1.style.color = `rgb(2, 134, 13)`;
        if(madeira>=item2Preco){
            item2.style.color = `rgb(2, 134, 13)`;
            if(madeira>=item3Preco){
                item3.style.color = `rgb(2, 134, 13)`;
            }
        }
    }
}


let menuAberto = false;
let menuOpcao = document.getElementById(`opcao`);

function abrirMenu(){
    lojaMachado();
    if(menuAberto){
        menuOpcao.style.display = `none`;
        menuAberto = false;
       }else{
        menuOpcao.style.display = `flex`;
        menuAberto = true;
    }
    
}

let tipoLoja =document.getElementById(`categoria`);
let item1 = document.getElementById(`item1`);
let item2 = document.getElementById(`item2`);
let item3 = document.getElementById(`item3`);
function lojaMachado(){

    tipoLoja.innerText = `Machados`;

    item1.innerHTML = `Machado de madeira <b> ${item1Preco} Lenhas </b>`;

    item2.innerHTML = `Machado de Pedra <b> ${item2Preco} Lenhas </b>`;

    item3.innerHTML = `Machado de Diamante <b> ${item3Preco} Lenhas </b>`;
}

let machadoDeMadeira = false;
let machadoDePedra = false;
let machadoDeDiamante = false;
let machadoEquipado = 0;
let caboOn = `rgba(114, 81, 19, ${machadoEquipado})`;
let tipoMachado = `transparent`;

function comprarItem1(){
    if(madeira>=item1Preco && !machadoDeMadeira ){
        madeira -=item1Preco;
        machadoDeMadeira = true;
    }
    if(machadoDeMadeira){
        machadoEquipado = 1;
        caboOn = `rgba(114, 81, 19, ${machadoEquipado})`;
        tipoMachado = `rgb(68, 51, 8)`;
    }
}

function comprarItem2(){
    if(madeira>=item2Preco && !machadoDePedra ){
        madeira -=item2Preco;
        machadoDePedra = true;
    }
    if(machadoDePedra){
        machadoEquipado = 2;
        caboOn = `rgba(114, 81, 19, ${machadoEquipado})`;
        tipoMachado = `rgb(51, 51, 51)`;

    }
}

function comprarItem3(){
    if(madeira>=item3Preco && !machadoDeDiamante ){
        madeira -=item3Preco;
        machadoDeDiamante = true;
    }
    if(machadoDeDiamante){
        machadoEquipado = 3;
        caboOn = `rgba(114, 81, 19, ${machadoEquipado})`;
        tipoMachado = `rgb(0, 232, 220)`;
    }
}





setInterval(updateStatus, 500);
drawScene();
update();