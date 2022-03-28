import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    UiModule,
  ]
})
export class SearchModule { }
