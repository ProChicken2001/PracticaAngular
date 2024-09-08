import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraNgComponent } from './calculadora-ng/calculadora-ng.component';

const routes: Routes = [
  { path: 'pages/practica1', component: CalculadoraComponent},
  { path: 'pages/practica2', component: CalculadoraNgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
