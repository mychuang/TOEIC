
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { VocabularyComponent } from './home/vocabulary/vocabulary.component';
import { VoclistComponent } from './home/voclist/voclist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vac', component: VocabularyComponent},
  {path: 'list', component: VoclistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
