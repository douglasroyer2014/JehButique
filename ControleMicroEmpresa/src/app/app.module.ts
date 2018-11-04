import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FornecedorComponent } from './view/fornecedor/fornecedor.component';
import { CepComponent } from './view/cep/cep.component';



@NgModule({
  declarations: [
    AppComponent,
    FornecedorComponent,
    CepComponent
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
