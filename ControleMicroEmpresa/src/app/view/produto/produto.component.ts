import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Data transfer/produto';
import { Marca } from 'src/app/Data transfer/marca';
import { Unidade } from 'src/app/Data transfer/unidade';
import { Tamanho } from 'src/app/Data transfer/tamanho';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  Produto= new Produto();
  Marca = new Marca();
  Tipo = new this.Tipo();
  Unidade = new Unidade();
  Tamanho = new Tamanho();
  
  constructor() { }

  ngOnInit() {
  }

}
