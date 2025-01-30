import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masculinas',
  templateUrl: './masculinas.component.html',
  styleUrl: './masculinas.component.css'
})
export class MasculinasComponent implements OnInit {


  colunasDeProdutos = [
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ],
    [
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
      { imagem: 'camiseta_masculina.png', preco: 'R$ 49,90', tamanho: 'M', pagamento: 'Pix ou Cartão' },
    ]
  ];



  ngOnInit(): void {

  }

}
