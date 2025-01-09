import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinhoSubject = new BehaviorSubject<Array<{ produto: any; quantidade: number }>>(
    this.carregarCarrinhoLocalStorage()
  );
  carrinho$ = this.carrinhoSubject.asObservable();
  itensCarrinho: Array<{ produto: any; quantidade: number }> = this.carregarCarrinhoLocalStorage();

  constructor() {}

  adicionarAoCarrinho(produto: any) {
    const itemExistente = this.itensCarrinho.find((item) => item.produto.imagem === produto.imagem);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.itensCarrinho.push({ produto, quantidade: 1 });
    }

    this.salvarCarrinhoLocalStorage();
    this.carrinhoSubject.next(this.itensCarrinho);
  }

  removerDoCarrinho(produto: any) {
    const itemIndex = this.itensCarrinho.findIndex((item) => item.produto.imagem === produto.imagem);

    if (itemIndex > -1) {
      this.itensCarrinho[itemIndex].quantidade--;

      if (this.itensCarrinho[itemIndex].quantidade === 0) {
        this.itensCarrinho.splice(itemIndex, 1);
      }
    }

    this.salvarCarrinhoLocalStorage();
    this.carrinhoSubject.next(this.itensCarrinho);
  }

  getTotal(): number {
    return this.itensCarrinho.reduce(
      (total, item) => total + parseFloat(item.produto.preco.replace('R$', '').replace(',', '.')) * item.quantidade,
      0
    );
  }

  private salvarCarrinhoLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));
  }

  private carregarCarrinhoLocalStorage(): Array<{ produto: any; quantidade: number }> {
    const carrinho = localStorage.getItem('carrinho');
    return carrinho ? JSON.parse(carrinho) : [];
  }
}
