import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../angular-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VoclistComponent } from './voclist/voclist.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    VocabularyComponent,
    VoclistComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule, AngularMaterialModule
  ]
})
export class HomeModule { }
