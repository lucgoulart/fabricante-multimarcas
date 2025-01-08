import { PersonalizacaoComponent } from './components/personalizacao/personalizacao.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuemSomosComponent } from './components/quem-somos/quem-somos/quem-somos.component';
import { ColunaProdutosComponent } from './components/componentes-globais/coluna-produtos/coluna-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    FooterComponent,
    PersonalizacaoComponent,
    QuemSomosComponent,
    ColunaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  exports: [
    HeaderComponent,  // Exporte o HeaderComponent se necessário
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
