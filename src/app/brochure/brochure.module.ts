import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrochureComponent } from './brochure.component';
import { BrochureRouterModule } from './bochure-routing.module';
import { EditorModule } from '@progress/kendo-angular-editor';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';



@NgModule({
  declarations: [BrochureComponent],
  imports: [
    CommonModule,
    BrochureRouterModule,
    EditorModule,
    TreeViewModule,
    PDFExportModule,
    IntlModule,
  ]
})
export class BrochureModule { }
