function mousePressed(){
    if(tela == 0 && mouseX>=390 && mouseX<=527 && mouseY>=189 && mouseY<230){
      console.log("botão login pressionado");
      tela = 1;
      inp.show();
      inp2.show();
    }
  // definido botão "jogar".
   // if(tela == 0 && mouseX>=215 && mouseX<=365 && mouseY>=220 && mouseY<270){
      //console.log("botão opções pressionado")
      //tela = 2;
    //}
  // definido botão "opções".
    if(tela == 0 && mouseX>=393 && mouseX<=528 && mouseY>=322 && mouseY<358){
      console.log("botão sobre nós pressionado")
      tela = 3;
    }
  // definido botão "sobre nós".
    if(tela == 0 && mouseX>=393 && mouseX<=527 && mouseY>=256 && mouseY<294){
      console.log("botão créditos pressionado")
      tela = 4;
    }
  // definido botão "créditos".
    if(tela == 1 && mouseX>=159 && mouseX<=356 && mouseY>=248 && mouseY<=282){
      console.log("Iniciar")
     if(login === "123" && senha ==="123"){
        tela = 2;
       inp.hide();
       inp2.hide();
       
     }
      
    } 
   if(tela == 2 && mouseX>=40 && mouseX<=235 && mouseY>=409 && mouseY<=438){
    console.log("Cálculo1")
    tela = 6;  
   }
   if(tela == 2 && mouseX>=195 && mouseX<=389 && mouseY>=319 && mouseY<=347){
    console.log("Cálculo2")
    tela = 7;  
   }
  if(tela == 2 && mouseX>=364 && mouseX<=559 && mouseY>=410 && mouseY<=437){
    console.log("Cálculo3")
    tela = 8;  
   }
   if(tela == 6 && mouseX>=400 && mouseX<=548 && mouseY>=282 && mouseY<=306){
    console.log("presencial")
    tela = 9;  
   }
  if(tela == 6 && mouseX>=400 && mouseX<=548 && mouseY>=336 && mouseY<=360){
    console.log("online")
    tela = 10;  
   }
  if(tela == 7 && mouseX>=400 && mouseX<=548 && mouseY>=282 && mouseY<=306){
    console.log("presencial")
    tela = 11;  
   }
   if(tela == 7 && mouseX>=400 && mouseX<=548 && mouseY>=336 && mouseY<=360){
    console.log("online")
    tela = 12;  
   }
   if(tela == 8 && mouseX>=400 && mouseX<=548 && mouseY>=282 && mouseY<=306){
    console.log("presencial")
    tela = 13;  
   }
  if(tela == 8 && mouseX>=400 && mouseX<=548 && mouseY>=336 && mouseY<=360){
    console.log("online")
    tela = 14;  
   }
  if(tela == 9 && mouseX>=418  && mouseX<=525  && mouseY>=60 && mouseY<=103){
    console.log("presencialm1")
    horarios.push("12M34");
    tela = 15;  
   }
   if(tela == 9 && mouseX>=418 && mouseX<=525 && mouseY>=130 && mouseY<=170){
    console.log("presencialt1")
     horarios.push("12T34")
    tela = 15;  
   }
  if(tela == 9 && mouseX>=418 && mouseX<=525 && mouseY>=205 && mouseY<=240){
    console.log("presencialn1")
    horarios.push("12N34")
    tela = 15;  
   }
  if(tela == 10 && mouseX>=27  && mouseX<=132  && mouseY>=80 && mouseY<=102){
    console.log("onlinem1")
    horarios.push("12M34");
    tela = 15;  
   }
   if(tela == 10 && mouseX>=27  && mouseX<=132  && mouseY>=130 && mouseY<=173){
    console.log("onlinet1")
     horarios.push("12T34");
    tela = 15;  
   }
  if(tela == 10 && mouseX>=27  && mouseX<=132  && mouseY>=199 && mouseY<=244){
    console.log("onlinen1")
    horarios.push("12N34");
    tela = 15;  
   }
  if(tela == 11 && mouseX>=418  && mouseX<=525  && mouseY>=60 && mouseY<=103){
    console.log("presencialm2")
    horarios.push("12M34");
    tela = 15;  
   }
   if(tela == 11 && mouseX>=418 && mouseX<=525 && mouseY>=130 && mouseY<=170){
    console.log("presencialt2")
     horarios.push("12T34");
    tela = 15;  
   }
  if(tela == 11 && mouseX>=418 && mouseX<=525 && mouseY>=205 && mouseY<=240){
    console.log("presencialn2")
    horarios.push("12N34");
    tela = 15;  
   }
  if(tela == 12 && mouseX>=33  && mouseX<=154  && mouseY>=29 && mouseY<=96){
    console.log("onlinem2")
    horarios.push("12M34");
    tela = 15;  
   }
   if(tela == 12 && mouseX>=33  && mouseX<=154  && mouseY>=117 && mouseY<=183){
    console.log("onlinet2")
     horarios.push("12T34");
    tela = 15;  
   }
  if(tela == 12 && mouseX>=33  && mouseX<=154  && mouseY>=205 && mouseY<=270){
    console.log("onlinen2")
     horarios.push("12N34");
    tela = 15;  
   }
  if(tela == 13 && mouseX>=418  && mouseX<=525  && mouseY>=60 && mouseY<=103){
    console.log("presencialm3")
    horarios.push("12M34");
    tela = 15;  
   }
   if(tela == 13 && mouseX>=414 && mouseX<=537 && mouseY>=130 && mouseY<=170){
    console.log("presencialt3")
     horarios.push("12T34");
    tela = 15;  
   }
  if(tela == 13 && mouseX>=419 && mouseX<=523 && mouseY>=205 && mouseY<=240){
    console.log("presencialn3")
    horarios.push("12N34");
    tela = 15;  
   }
  if(tela == 14 && mouseX>=33  && mouseX<=154  && mouseY>=29 && mouseY<=96){
    console.log("onlinem3")
    horarios.push("12M34");
    tela = 15;  
   }
  if(tela == 14 && mouseX>=33  && mouseX<=154  && mouseY>=117 && mouseY<=183){
    console.log("onlinet3")
     horarios.push("12T34");
    tela = 15;  
   }
  if(tela == 14 && mouseX>=33  && mouseX<=154  && mouseY>=205 && mouseY<=270){
    console.log("onlinen3")
    horarios.push("12N34");
    tela = 15;  
   }
  if((tela == 1 || tela == 2 || tela == 3 || tela == 4 || tela == 5 || tela == 6 || tela== 7 || tela== 8 || tela==9 || tela==10 || tela==11 || tela == 12 || tela == 13 || tela == 14 || tela == 15) && mouseX>=24 && mouseX<=48 && mouseY>=445 && mouseY<470){
    console.log("botão voltar tela, para todas as telas")
    tela = 0;
    horarios = []
  }
}
