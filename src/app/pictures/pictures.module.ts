import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@progress/kendo-angular-editor';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';

import { PicturesComponent } from './pictures.component';
import { PicturesRouterModule } from './pictures-routing.module';




@NgModule({
  declarations: [PicturesComponent],
  imports: [
    CommonModule,
    PicturesRouterModule,
    EditorModule,
    TreeViewModule,
    PDFExportModule,
    IntlModule,
  ]
})
export class PicturesModule { }
