import {Component} from '@angular/core';



@Component({
  selector: 'app-contador',
  template:`
  
  <h1> {{title}} </h1>  
<h3>la base es: <strong>{{base}}</strong></h3>

<button (click)="acumular ()"></button>

<span> {{numero}} </span>

<button (click)="decrementar"></button>

  
  `
})


export class contadorComponent{
  title: string = 'contador App'
  numero: number = 10
  base: number = 5

  decrementar(){
    this.numero -= this.base
  }

  acumular(){ 
    this.numero += this.base
  }
}
