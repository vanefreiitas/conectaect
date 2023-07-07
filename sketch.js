var tela = 0;
// tela 0: inicio.
// tela 1: login.
// tela 2: disciplinas
// tela 3: créditos
// tela 4: sobre nós
// tela 5: tela teste
// tela 6: Cálculo1
// tela 7: Cálculo2
// tela 8: cálculo3
// tela 9: presencial1
// tela10: online1
// tela11: presencial2
// tela12: online2
// tela13: presencial3
// tela14: online3
// tela15: final

var menu;
var creditos
var telaLogin
var teladisciplinas
var sobrenós
var calculo1
var presencial1
var online1
var presencial2
var online2
var presencial3
var online3
var telafinal
var login
var senha
let inp
let inp2
let horarios = []

function preload(){
  menu = loadImage("tela_inicial.png")
  creditos = loadImage("6-1.png")
  telaLogin = loadImage("login.png")
  sobrenós = loadImage("4.png")
  teladisciplinas = loadImage("telaDisc.png")
  calculo1 = loadImage("12.png")
  presencial1 = loadImage("presencial.png")
  online1 = loadImage("online.png")
  calculo2 = loadImage("12.png")
  presencial2 = loadImage("presencial.png")
  online2 = loadImage("online.png")
  calculo3 = loadImage("12.png")
  presencial3 = loadImage("presencial.png")
  online3 = loadImage ("online.png")
  telafinal = loadImage("18.png")
  M1 = loadImage ("16.png")
   
}
// carregadas as imagens.

function setup() {
  createCanvas(595, 495);
  inp = createInput('');
  inp2 = createInput('');
  inp.hide();
  inp2.hide();
  //imageMode(CORNERS);
  //image(M1, 462, 104, 90, 40);
   
  
  
}
// definido tamanho e a renderização.

function draw() {  
  if(tela == 0){
    background(menu);
    noStroke();
    fill(220,20,60)
  
    fill(75,0,130);
    rect(396,320,140,30,15);
    rect(396,255,140,30,15);
    rect(390,190,150,30,15);
    textFont("Impact");
    textSize(20);
    fill(220, 220, 220);
    text("Login", 436,215)
    text("Créditos", 435, 345);

    textSize(20);
    text(" Sobre nós", 420, 280)
    //text(mouseX + " , " +mouseY, 100, 100)
    }
  // definido tela 0.

  if(tela == 1){
     background(telaLogin)
    inp.position(303, 149);
    inp.size(100);
    inp.input(myInputEvent);
  
    inp2.position(303, 200);
    inp2.size(100);
    inp2.input(myInputEvent);
    
    fill(0,0,128);
    textSize(25);
    textFont("impact");
    text("⬅️  ", 20,469)
    

     //text(mouseX + " , " +mouseY, 100, 100)
    
  
  }
  //Definida tela 1
  if(tela == 2){
     background(teladisciplinas)
    
    fill('pink')
    
    fill(0,0,128);
    textSize(25);
    textFont("Algerian");
    
  //text(mouseX + " , " +mouseY, 100, 100)
    fill(0,0,128);
    textSize(25);
    textFont("Algerian");
    text("⬅️   ", 20,469)
    
  }
// definida tela 2.
  
  if(tela==3){
    background(creditos)
    noStroke()
    fill("white")
    rect(15,459,30,15,15);
    
    fill(128,0,0);
    textSize(25);
    textFont("Impact");
    text("⬅️    ", 20,469);
    textSize(40);
    
  }
// definida tela 3.
  if( tela==4 ){
    background(sobrenós)
    fill(255,69,0);  
    //rect(15,459,30,15,15);
    
    fill("white")
    textSize(25);
    textFont("Impact");
    text("⬅️    ", 20,469); 
  }
  // Definida tela 4
  if( tela== 5 ){
    
    background(240,230,140)
    
    noStroke()
    fill(255,69,0);  
    rect(15,459,30,15,15);
    
    fill("white")
    textSize(25);
    textFont("Impact");
    text("⬅️   ", 20,469);
   
    
  }
// definida tela 5. 

  if( tela==6 ){
    background(calculo1 )
  
  
    //rect(15,459,30,15,15);
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️    ", 20,469);
    fill('pink')
    //text(mouseX + " , " +mouseY, 100, 100)
  }
// definida tela 6
  if( tela==9 ){
    background(presencial1)
    
    //rect(15,459,30,15,15);
   
    
    fill(75,0,130)
    
    rect(418,60,110,50,15)
    rect(418,130,110,50,15)
    rect(418,200,110,50,15)
    fill("white")
    textSize(15)
    textFont("Impact")
    text("PRESENCIAL\n"+  "   12M34", 440, 79)
    text("PRESENCIAL\n"+  "   12T34", 440, 150) 
    text("PRESENCIAL\n"+  "   12N34", 440, 220)
    
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️    ", 20,469);
    fill('pink')
    textSize(20)
     //text(mouseX + " , " +mouseY, 100, 100)
    
  }
  
  
  // definida tela 9
  if( tela==10 ){
    background(online1)
  
    //rect(15,459,30,15,15);
    
    fill(75,0,130)
    
    rect(27,60,110,50,15)
    rect(27,130,110,50,15)
    rect(27,200,110,50,15)
    fill("white")
    textSize(15)
    textFont("Impact")
    text("ONLINE\n"+  " 12M34", 55, 79)
    text("ONLINE\n"+  " 12T34", 55, 150) 
    text("ONLINE\n"+  " 12N34", 55, 220)
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️    ", 20,469);
    fill('pink')
    textSize(20)
     //text(mouseX + " , " +mouseY, 100, 100)
  }
  // definida tela 10
  if( tela==7 ){
    background(calculo2 )
  
    //rect(15,459,30,15,15);
     
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️   ", 20,469);
    fill('white')
      
  }
  // definida tela 7
   if( tela==11 ){
    background(presencial2)
  
    //rect(15,459,30,15,15);
      fill(75,0,130)
    
    rect(418,60,110,50,15)
    rect(418,130,110,50,15)
    rect(418,200,110,50,15)
    fill("white")
    textSize(15)
    textFont("Impact")
    text("PRESENCIAL\n"+  "   12M34", 440, 79)
    text("PRESENCIAL\n"+  "   12T34", 440, 150) 
    text("PRESENCIAL\n"+  "   12N34", 440, 220)
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️    ", 20,469);
    fill('white')
  }
  // definida tela 11
  if( tela==12 ){
    background(online2)
  
    //rect(15,459,30,15,15);
    fill(75,0,130)
    
    rect(27,60,110,50,15)
    rect(27,130,110,50,15)
    rect(27,200,110,50,15)
    fill("white")
    textSize(15)
    textFont("Impact")
    text("ONLINE\n"+  " 12M34", 55, 79)
    text("ONLINE\n"+  " 12T34", 55, 150) 
    text("ONLINE\n"+  " 12N34", 55, 220)
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️    ", 20,469);
    fill('white')
  }
  // definido tela 12
   if( tela==8 ){
    background(calculo3)
  
    //rect(15,459,30,15,15);
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️    ", 20,469);
    fill('white')
      
  }
  // definida tela 8
  if( tela==13 ){
    background(presencial3)
  
    //rect(15,459,30,15,15);
     fill(75,0,130)
    
    rect(418,60,110,50,15)
    rect(418,130,110,50,15)
    rect(418,200,110,50,15)
    fill("white")
    textSize(15)
    textFont("Impact")
    text("PRESENCIAL\n"+  "   12M34", 440, 79)
    text("PRESENCIAL\n"+  "   12T34", 440, 150) 
    text("PRESENCIAL\n"+  "   12N34", 440, 220)
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️   ", 20,469);
    fill('pink')
     textSize(20);
    //text(mouseX + " , " +mouseY, 100, 100)
  }
  // definida tela 13
   if( tela==14 ){
    background(online3)
  
    //rect(15,459,30,15,15);
     fill(75,0,130)
    
    rect(27,60,110,50,15)
    rect(27,130,110,50,15)
    rect(27,200,110,50,15)
    fill("white")
    textSize(15)
    textFont("Impact")
    text("ONLINE\n"+  " 12M34", 55, 79)
    text("ONLINE\n"+  " 12T34", 55, 150) 
    text("ONLINE\n"+  " 12N34", 55, 220)
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️    ", 20,469);
    fill('white')
  }
  // definida tela 14
   if( tela==15 ){
    background(telafinal)

    var x = 100
    var y = 70
    
    //rect(15,459,30,15,15);
    
    fill(255,69,0);
    textSize(25);
    textFont("Impact");
    fill('black')
    text("⬅️   ", 20,469);
    fill('purple')
     for (let i = 0; i < horarios.length; i++) {
      textSize(35) 
      console.log(horarios[i])
      text(horarios[i], 250, 276)
    }
     
    }
 
}
function myInputEvent() {
  login = this.value();
  senha = this.value();
}
// definido tela15