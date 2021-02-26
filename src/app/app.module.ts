import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { MenuModule } from '@progress/kendo-angular-menu';
import { ButtonsModule } from '@progress/kendo-angular-buttons';







@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LayoutModule,
    IndicatorsModule,
    IconsModule,
    NavigationModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    MenuModule,
    ButtonsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
