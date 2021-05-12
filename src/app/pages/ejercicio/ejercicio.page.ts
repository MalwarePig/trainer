import { Component, NgProbeToken, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {

  //VARIABLES
  Segundos: number;//Segundero
  TotalMinutos: number;//Minutos acomulados;
  LimiteEjercicio: number;//Limite terminar ejercicio
  Intervalo;//Variable para determinar los intervalos
  Porcentaje: number;
  constructor() {
    this.Segundos = 0;
    this.TotalMinutos = 0;
    this.LimiteEjercicio = 40;
    this.Porcentaje = 0;
  }

  ngOnInit() {
    var NGPublic = this;
    Cronometro();


    function Cronometro() {
      NGPublic.Intervalo = setInterval(function () {
        if(NGPublic.Segundos == 60){//Incrementa minutos
          NGPublic.TotalMinutos = NGPublic.TotalMinutos + 1;
        }

        if(NGPublic.Segundos == 60){//Resetea el segundero
          NGPublic.Segundos = 0;
        }

        console.log(NGPublic.Porcentaje)
        NGPublic.Porcentaje = ((100/60) * NGPublic.Segundos) / 100; //Calcula el porcentaje

        if(NGPublic.TotalMinutos == NGPublic.LimiteEjercicio){
          clearInterval(NGPublic.Intervalo);
        }



        NGPublic.Segundos = NGPublic.Segundos + 1;
      }, 1000);
    }




  }
}
