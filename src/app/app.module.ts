import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadorComponent } from './contadores/contadores/contador.component';
  
@NgModule({
  declarations: [
    AppComponent,
    contadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
