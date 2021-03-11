import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PicturesComponent } from "./pictures.component";

const routes: Routes = [
  {
    path: '',
    component: PicturesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class PicturesRouterModule { }
