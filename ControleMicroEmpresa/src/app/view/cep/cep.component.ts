import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/Data transfer/cep';
import { CepService } from 'src/app/service/cep.service';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  
  Cep = new Cep();
  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  buscar(){
    this.cepService.buscar(this.Cep.cep)
    .then((cep:Cep)=> this.Cep=cep)   
    .catch((cep:Cep)=> {
      alert('Nao foi possivel buscar o Cep')
    }) 
  }

}
