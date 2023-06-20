let imagemDaEstrada;
let imagemDoAtor=[];
let imagemCarro;
let imagemAndaime;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let fonte;
let meusPontos = 0;
let ambiente;
let atropela;
let trilha;
let galinha;



function preload(){
  
  imagemDaEstrada = loadImage("Imagens/fundo.png");
  
  for (c=0; c<3; c++){
    imagemDoAtor[c]=
    loadImage("Imagens/galinha_"+c+".png");
  }
  imagemPontuacao = loadImage("Imagens/pontuacao.png")
  imagemCarro = loadImage("Imagens/carro_1.png");
  imagemCarro2 = loadImage("Imagens/carro_2.png");
  imagemCarro3 = loadImage("Imagens/carro_3.png");
  imagemCarro4 = loadImage("Imagens/carro_4.png");
  imagemCarro5 = loadImage("Imagens/carro_5.png");
  imagemEsquerda = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro5]
  imagemDireita = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro3]
  imagemAndaime = loadImage("Imagens/andaime.png");
  fontePlacar = loadFont("Deadly_Advance.otf")
  ambiente = loadSound("Audio/ambiente.mp3");
  atropela = loadSound("Audio/atropelado.wav");
  trilha = loadSound("Audio/background.mp3");
  galinha = loadSound("Audio/galinha.wav");
}

function mostraAndaime(){
  image(imagemAndaime, 0, 0, 600, 400);
}

function mostraPontos(){
  image(imagemPontuacao, 20, 15, 80, 50);
  text(meusPontos, 63, 53);
  textSize(25);
  textFont(fontePlacar);
  fill(255);
  }

function marcaPontos(){
  if (yAtor < 35){
    meusPontos++;
    colidiu();
    galinha.play();
  }
}