import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SpecificsComponent } from "./specifics.component";

const routes: Routes = [
  {
    path: '',
    component: SpecificsComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})

export class SpecificsRoutingModule { }
