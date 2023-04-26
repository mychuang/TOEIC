import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../angular-material';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule
  ]
})
export class HomeModule { }
