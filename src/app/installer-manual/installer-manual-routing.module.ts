import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InstallerManualComponent } from "./installer-manual.component";

const routes: Routes = [
  {
    path: '',
    component: InstallerManualComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class InstallerManualRouterModule { }
