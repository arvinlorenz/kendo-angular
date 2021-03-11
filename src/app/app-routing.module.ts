import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'specifics',
    loadChildren: () => import('./specifics/specifics.module').then( m => m.SpecificsModule)
  },
  {
    path: 'brochure',
    loadChildren: () => import('./brochure/brochure.module').then( m => m.BrochureModule)
  },
  {
    path: 'data-sheet',
    loadChildren: () => import('./data-sheet/data-sheet.module').then( m => m.DataSheetModule)
  },
  {
    path: 'installer-manual',
    loadChildren: () => import('./installer-manual/installer-manual.module').then( m => m.InstallerManualModule)
  },
  {
    path: 'website-info',
    loadChildren: () => import('./website-info/website-info.module').then( m => m.WebsiteInfoModule)
  },
  {
    path: 'pictures',
    loadChildren: () => import('./pictures/pictures.module').then( m => m.PicturesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
