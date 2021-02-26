import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'specifics',
    loadChildren: () => import('./specifics/specifics.module').then( m => m.SpecificsModule)
  },
  {
    path: 'data-sheet',
    loadChildren: () => import('./data-sheet/data-sheet.module').then( m => m.DataSheetModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
