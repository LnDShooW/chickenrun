function setup(){
  createCanvas(600, 400);
  trilha.loop();
  ambiente.loop();
  }

function draw(){
  background(imagemDaEstrada); 
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  mostraAndaime();
  movimentoAtor(); 
  verificaColisao();
  //colisaoAtor();
  resetCarro();
  mostraPontos();
  marcaPontos();
  }
