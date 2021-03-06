import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  palabra = "MONGOLO";
  palabraOculta = "";
  intentos = 0;
  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  title = 'ahorcado';

  constructor(){
 
    this.palabraOculta = "_ ".repeat(this.palabra.length);
    
    
  }
  comprobar(letra){

    
    let palabraOcultaArr = this.palabraOculta.split(' ');
    this.existeLetra(letra);
    for(let i = 0; i < this.palabraOculta.length; i++){
      
      if (this.palabra[i] === letra){

        palabraOcultaArr[i] = letra;
        this.palabraOculta = palabraOcultaArr.join(' ');

      }
      
    }
    this.verificarGane();
  }

  verificarGane(){

    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra){
      this.gano = true;
      console.log("Has ganado!");
    }

    if (this.intentos >= 9){

      this.perdio = true;
      console.log("Perdiste!");

    }



  }

  existeLetra(letra){

    if (this.palabra.indexOf(letra) >= 0){
      console.log("Letra: " + letra + " existe");
      
    }else{
      console.log("Letra: " + letra + " NO existe");
      this.intentos++;
    }


  }
}
