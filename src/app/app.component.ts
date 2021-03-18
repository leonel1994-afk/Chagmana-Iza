import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chagmana-Iza';
  division(){
    let Dividendo = (<HTMLInputElement>document.getElementById("dividendo")).value;
    let Divisor = (<HTMLInputElement>document.getElementById("divisor")).value;
    let Cociente = "";
    let Resto = "";
    let elementProcess = <HTMLInputElement>document.getElementById("process");
    let elementResult = <HTMLInputElement>document.getElementById("result");
    let _totalCociente = "";
    let _subRestoA:number;
    let _subRestoB:number;
    let _totalRestoA;
    let _totalSumaAA;
    let _totalRestoB:number;
    let auxiliarResto;
    if (Number(Dividendo)<Number(Divisor) || Number(Divisor) == 0) {
        elementProcess.value = "No se puede realizar la división";
        elementResult.value = "Error";
    }else{
        let _digitosTomados = Divisor.length;
        let _tomarCifrasDividendo = Dividendo.substr(0,_digitosTomados);
        if (Number(_tomarCifrasDividendo)<Number(Divisor)) {
            _digitosTomados++;
            _tomarCifrasDividendo = Dividendo.substr(0,_digitosTomados);
        }
        Cociente = (Number(_tomarCifrasDividendo)/Number(Divisor)).toString();
        Cociente = Cociente.split(".",1).toString();
        _subRestoA = Number(Cociente)*Number(Divisor);
        _totalRestoA = (Number(Dividendo) - Number(Divisor)).toString();
        _totalSumaAA = (Number(Dividendo) + Number(Divisor)).toString();
        auxiliarResto = _totalRestoA;
        Resto += Dividendo + " - " + Divisor + " = " + _totalRestoA + "\n";
        Resto += Dividendo + " + " + Divisor + " = " + _totalSumaAA + "\n";
        while(_digitosTomados <= Dividendo.length){
            Resto += Dividendo.substr(_digitosTomados,1) + "\n";
            auxiliarResto += Dividendo.substr(_digitosTomados, 1);
            _digitosTomados++;
            if (Number(auxiliarResto)>=Number(Divisor)) {
                _totalCociente = (Number(auxiliarResto)-Number(Divisor)).toString();
                _totalCociente = _totalCociente.split(".",1).toString();
                Cociente += _totalCociente.toString();
                _subRestoB = Number(_totalCociente)*Number(Divisor);
                _totalRestoB = (Number(auxiliarResto) - _subRestoB);
                //Resto += auxiliarResto + " - " + _subRestoB + " = " + _totalRestoB + "\n";
                auxiliarResto = _totalRestoB.toString();
            }else{
                Cociente +="0";
            }
        }
        elementProcess.value = Resto + "Resto: " + auxiliarResto;
    }
        Cociente = Cociente.substr(0,Cociente.length-1);
      //  elementResult.value = Cociente;   
}
}
