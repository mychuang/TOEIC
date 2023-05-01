import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../angular-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoclistComponent } from './voclist/voclist.component';



@NgModule({
  declarations: [
    HomeComponent,
    VoclistComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule, AngularMaterialModule
  ]
})
export class HomeModule { }
