let yAtor = 320;
let xAtor = 250;
let lAtor = 30;
let aAtor = 30;
let andar = 0;
let tempo = 0;
let colisao = false;

function mostraAtor(){
  image(imagemDoAtor[andar%3], xAtor, yAtor, lAtor, aAtor);
}

function movimentoAtor(){
  if (keyIsDown(87)){
      yAtor -= 3;
      tempo++;
  }
    
  if (keyIsDown(83)){
    if (podeSeMover()){
    yAtor += 3;
     tempo++;
    }
  }
  
  if (tempo>10){
    andar++;
    tempo=0;
  }
}

function podeSeMover(){
  return yAtor < 320;
}

function verificaColisao(){
 //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0; i < imagemEsquerda.length; i++ ){
    colisao = collideRectRect(xCarrosE[i], yCarrosE[i], lCarro / 2, aCarro / 2,xAtor, yAtor, 15, 15)
    if (colisao){
      colidiu();
      atropela.play();
      if (pontosMaiorQueZero()){
        meusPontos--;
    }
    }  
  }
  for (let i = 0; i < imagemDireita.length; i++ ){
    colisao = collideRectRect(xCarrosD[i], yCarrosD[i], -lCarro / 2, aCarro / 2,xAtor, yAtor, 15, 15)
    if (colisao){
      colidiu();
      atropela.play();
      if (pontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
}

function colidiu(){
  yAtor = 320;
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}