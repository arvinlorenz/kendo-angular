import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSheetRouterModule } from './data-sheet-routing.module';
import { EditorModule } from '@progress/kendo-angular-editor';
import { DataSheetComponent } from './data-sheet.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';


@NgModule({
  declarations: [DataSheetComponent],
  imports: [
    CommonModule,
    DataSheetRouterModule,
    EditorModule,
    TreeViewModule,
    PDFExportModule,
    IntlModule,

  ]
})
export class DataSheetModule { }
