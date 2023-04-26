import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from "./angular-material";
import { HomeModule } from "./home/home.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, AngularMaterialModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
