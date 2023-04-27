
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { VocabularyComponent } from './home/vocabulary/vocabulary.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vac', component: VocabularyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
