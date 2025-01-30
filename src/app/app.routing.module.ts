// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PersonalizacaoComponent } from './components/personalizacao/personalizacao.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos/quem-somos.component';
import { MasculinasComponent } from './components/masculinas/masculinas/masculinas.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent},
  { path: 'personalizacao', component: PersonalizacaoComponent},
  { path: 'quem-somos', component: QuemSomosComponent},
  { path: 'masculinas', component: MasculinasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
