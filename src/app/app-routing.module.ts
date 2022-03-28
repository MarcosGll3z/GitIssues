import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'buscar',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path:'**',
    redirectTo: 'buscar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
