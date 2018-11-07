import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Data transfer/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

 Cliente= new Cliente(); 
  constructor() { }

  ngOnInit() {
  }

}
