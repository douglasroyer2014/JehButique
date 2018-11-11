import { getLocaleExtraDayPeriodRules } from "@angular/common";

export class TipoProduto {

   codigo:number;
   descricao:string;

   getTipo(){
    return [{codigo:1 , descricao :"Camisa"},
   { codigo:2 , descricao :"Calça"},
   { codigo:1 , descricao :"Bermuda"},
   { codigo:1 , descricao :"Casaco"},
   { codigo:1 , descricao :"Lenço"},    
 ]
}
  
}
