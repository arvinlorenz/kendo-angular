import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataSheetComponent } from "./data-sheet.component";

const routes: Routes = [
  {
    path: '',
    component: DataSheetComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class DataSheetRouterModule { }
