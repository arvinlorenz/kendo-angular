import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebsiteInfoComponent } from "./website-info.component";

const routes: Routes = [
  {
    path: '',
    component: WebsiteInfoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class WebsiteInfoRouterModule { }
