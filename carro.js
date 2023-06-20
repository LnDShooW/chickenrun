//Variaveis dos Carros
let xCarrosE = [600, 600, 600, 850, 830, 860, 960, 930, 920]
let xCarrosD = [-100, -100, -350, -330, -460, -430]
let yCarrosE = [289, 253, 217, 289, 253, 217,  289, 253, 217]
let yCarrosD = [138, 101, 138, 101,  138, 101]
let velocidadeCarrosE = [3.4 , 4.3 , 5, 3.4 , 4.3 , 5,  3.4 , 4.3 , 5]
let velocidadeCarrosD = [4.8, 6, 4.8, 6, 4.8, 6]
let lCarro = 45;
let aCarro = 35;

function mostraCarro(){
  for (let i = 0; i < imagemEsquerda.length; i++ ){
    image(imagemEsquerda[i], xCarrosE[i], yCarrosE[i], lCarro, aCarro);
  }
  for (let i = 0; i < imagemDireita.length; i++ ){
    image(imagemDireita[i], xCarrosD[i], yCarrosD[i], -lCarro, aCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemEsquerda.length; i++ ){
    xCarrosE[i] -= velocidadeCarrosE[i];
  }
  for (let i = 0; i < imagemDireita.length; i++ ){
    xCarrosD[i] += velocidadeCarrosD[i];
  }
}

function resetCarro(){
  for (let i = 0; i < imagemEsquerda.length; i++ ){
    if (passouTodaATela(xCarrosE[i])){
    xCarrosE[i] = 650;
    }
  }
  for (let i = 0; i < imagemDireita.length; i++ ){
    if (passouTodaATelaD(xCarrosD[i])){
    xCarrosD[i] = -100;
    }
  }
}

function passouTodaATela(xCarrosE){
  return xCarrosE < -60;
}

function passouTodaATelaD(xCarrosD){
  return xCarrosD > 660;
}
