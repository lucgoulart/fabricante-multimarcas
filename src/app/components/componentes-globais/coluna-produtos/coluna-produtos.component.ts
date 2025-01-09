// src/app/coluna-produtos/coluna-produtos.component.ts
import { Component, Input } from '@angular/core';
import { CarrinhoService } from '../../servicos/servico-carrinho-compras/carrinho-service';

@Component({
  selector: 'app-coluna-produtos',
  templateUrl: './coluna-produtos.component.html',
  styleUrls: ['./coluna-produtos.component.css'],
})
export class ColunaProdutosComponent {
  @Input() produtos: Array<{
    imagem: string;
    preco: string;
    tamanho: string;
    pagamento: string;
  }> = [];

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
