import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificsRoutingModule } from './specifics-routing.module';
import { SpecificsComponent } from './specifics.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SpecificsComponent],
  imports: [
    CommonModule,
    SpecificsRoutingModule,
    GridModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ]
})
export class SpecificsModule { }
