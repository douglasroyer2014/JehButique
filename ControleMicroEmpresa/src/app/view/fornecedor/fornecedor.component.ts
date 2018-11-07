import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/Data transfer/fornecedor';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  Fornecedor = new Fornecedor();
  constructor() { }

  ngOnInit() {
  }

}
