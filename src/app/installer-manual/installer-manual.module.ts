import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@progress/kendo-angular-editor';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { InstallerManualComponent } from './installer-manual.component';
import { InstallerManualRouterModule } from './installer-manual-routing.module';




@NgModule({
  declarations: [InstallerManualComponent],
  imports: [
    CommonModule,
    InstallerManualRouterModule,
    EditorModule,
    TreeViewModule,
    PDFExportModule,
    IntlModule,
  ]
})
export class InstallerManualModule { }
