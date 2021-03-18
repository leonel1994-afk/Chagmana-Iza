import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma-numeros',
  templateUrl: './suma-numeros.component.html',
  styleUrls: ['./suma-numeros.component.css']
})
export class SumaNumerosComponent implements OnInit {
   primerNumero: string="";
   segundoNumero: string="";

   resultado:string="";

  mensaje: string="";

  constructor() { }

  ngOnInit(): void {
  }

  sumarNumeros(): void {

    if (this.primerNumero != "" && this.segundoNumero != "") {
      this.mensaje = "";
      jQuery("#resultado").val(this.generarSuma(this.primerNumero, this.segundoNumero));
    } else {
      this.mensaje = "Error: Existen Campos Vacios. Verifique";
    }

  }

  restarNumeros(): void {

    if (this.primerNumero != "" && this.segundoNumero != "") {
      if (Number(this.segundoNumero) < Number(this.primerNumero)) {
        this.mensaje = "";
        jQuery("#resultado").val(this.generarResta(this.primerNumero, this.segundoNumero));
      } else {
        this.mensaje = "El Primero número debe ser mayor.";
      }
    } else {
      this.mensaje = "Error: Existen Campos Vacios. Verifique";
    }

  }

  generarSuma(primerNumero: string, segundoNumero: string): string {

    let lengthA: number = primerNumero.length;
    let lengthB: number = segundoNumero.length;

    if (lengthA > lengthB) {
      segundoNumero = this.llenarCeros(segundoNumero, lengthA);
    }

    if (lengthB > lengthA) {
      primerNumero = this.llenarCeros(primerNumero, lengthB);
    }

    let i: number = primerNumero.length - 1;
    let residuo: number = 0;
    let resultado: string = "";
    while (i >= 0) {

      let a: number = Number(primerNumero[i].toString());
      let b: number = Number(segundoNumero[i].toString());

      let result: number = a + b + residuo;

      if (result >= 10) {
        residuo = Math.trunc(result / 10);
        result = result % 10;
      }
      else {
        residuo = 0;
      }

      if (i != 0) {
        resultado += result.toString();
      }
      else {
        if (result >= 10) {
          resultado += (a + b + residuo).toString();
        }
        else {
          resultado += result.toString();
        }
      }

      i--;

    } 

    return this.invertirCadena(resultado);

  }

  generarResta(primerNumero: string, segundoNumero: string): string {

    let lengthA: number = primerNumero.length;
    let lengthB: number = segundoNumero.length;

    if (lengthA > lengthB) {
      segundoNumero = this.llenarCeros(segundoNumero, lengthA);
    }

    if (lengthB > lengthA) {
      primerNumero = this.llenarCeros(primerNumero, lengthB);
    }

    let i: number = primerNumero.length - 1;
    let residuo: number = 0;
    let resultado: string = "";
    while (i >= 0) {

      let a: number = Number(primerNumero[i].toString());
      let b: number = Number(segundoNumero[i].toString());

      a = a - residuo;

      if (a >= b) {
        residuo = 0;
      } else {
        a = a + 10;
        residuo = 1;
      }

      resultado += (a - b).toString();

      i--;

    } 

    return this.invertirCadena(resultado);

  }

  invertirCadena(resultado: string): string {
    let i: number = resultado.length - 1;
    let cadena: string = "";

    while (i >= 0) {
      cadena += resultado[i];
      i--;
    } 

    return cadena;

  }

  llenarCeros(numero: string, longitud: number): string {

    let longNumero: number = numero.length;
    let rango: number = longitud - longNumero;
    let ceros: string = "";

    let i: number = 0;
    while (i < rango){
      ceros += "0";
      i++;
    } 

    return ceros + numero;

  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}