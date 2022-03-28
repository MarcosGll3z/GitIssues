import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchinputComponent } from './searchinput/searchinput.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    SearchinputComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    SearchinputComponent,
    CardComponent,
  ]
})
export class UiModule { }
