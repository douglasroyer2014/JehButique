import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Data transfer/produto';
import { Marca } from 'src/app/Data transfer/marca';
import { Unidade } from 'src/app/Data transfer/unidade';
import { Tamanho } from 'src/app/Data transfer/tamanho';
import { TipoProduto } from 'src/app/Data transfer/tipoProduto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  
})

export class ProdutoComponent implements OnInit {
  
  Produto= new Produto();
  Marca = new Marca();
  Tipo = new TipoProduto();
  Unidade = new Unidade();
  Tamanho = new Tamanho();
  
  tipos:any[];
  constructor() { 

    this.tipos =this.Tipo.getTipo();
  }

  ngOnInit() {
  }


}
