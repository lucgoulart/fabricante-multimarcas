// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PersonalizacaoComponent } from './components/personalizacao/personalizacao.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent},
  {path: 'personalizacao', component: PersonalizacaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
