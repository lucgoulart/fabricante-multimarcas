import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../servicos/carrinho-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItens = 0;
  totalValor = 0;
  isMenuOpen = false;
  mostrarCarrinho = false;
  itensCarrinho: Array<{ produto: any; quantidade: number }> = [];


  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.carrinhoService.carrinho$.subscribe((itens) => {
      this.itensCarrinho = itens;
      this.totalValor = this.carrinhoService.getTotal();
    });
  }

  toggleCarrinho() {
    this.mostrarCarrinho = !this.mostrarCarrinho;
  }
  removerDoCarrinho(produto: any) {
    this.carrinhoService.removerDoCarrinho(produto);
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  abrirModal(): void {
    const modal = document.getElementById('avisoModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  fecharModal(): void {
    const modal = document.getElementById('avisoModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
