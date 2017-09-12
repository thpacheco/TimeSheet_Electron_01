import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KzMaskDirective } from './util/directives/maskaras-input/mask.input';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, KzMaskDirective],
  exports: [KzMaskDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
