import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@progress/kendo-angular-editor';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';

import { WebsiteInfoComponent } from './website-info.component';
import { WebsiteInfoRouterModule } from './website-info-routing.module';


@NgModule({
  declarations: [WebsiteInfoComponent],
  imports: [
    CommonModule,
    WebsiteInfoRouterModule,
    EditorModule,
    TreeViewModule,
    PDFExportModule,
    IntlModule,
  ]
})
export class WebsiteInfoModule { }
