import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/Data transfer/venda';
import { Cliente } from 'src/app/Data transfer/cliente';
import { Pagamento } from 'src/app/Data transfer/pagamento';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  Venda = new Venda();
  Cliente = new Cliente();
  Pagamento = new Pagamento();

  constructor() { }

  ngOnInit() {
  }

}
