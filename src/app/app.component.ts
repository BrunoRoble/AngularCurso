import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
