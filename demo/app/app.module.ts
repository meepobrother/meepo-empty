import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmptyModule } from '../../src/app/app';
// import {WorkerAppModule} from '@angular/platform-webworker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmptyModule
    // WorkerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

