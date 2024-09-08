import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  constructor() {}

  ngOnInit(): void{

  }

  pressKey(miVariable: any){
    this.num1 =+ miVariable.target.value
  }

  pressKey2(miVariable: any){
    this.num2 =+ miVariable.target.value
  }

  sum(){
    this.resultado = this.num1 + this.num2;
  }

}
