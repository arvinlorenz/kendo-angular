import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: SocialMediaComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class SocialMediaRouterModule { }
