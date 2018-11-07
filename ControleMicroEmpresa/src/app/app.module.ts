import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FornecedorComponent } from './view/fornecedor/fornecedor.component';
import { CepComponent } from './view/cep/cep.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { VendaComponent } from './view/venda/venda.component';
import { ClienteComponent } from './view/cliente/cliente.component';
import { ItemVendaComponent } from './view/item-venda/item-venda.component';
import { CarteiraItemComponent } from './view/carteira-item/carteira-item.component';



@NgModule({
  declarations: [
    AppComponent,
    FornecedorComponent,
    CepComponent,
    ProdutoComponent,
    VendaComponent,
    ClienteComponent,
    ItemVendaComponent,
    CarteiraItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
