import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './components/campanha/criar/criar.component';

const routes: Routes = [
  { path: 'campanha', component: CriarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }