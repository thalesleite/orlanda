import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './home/historia/historia.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent,
    // children: [
    //   { path: 'historia', component: HistoriaComponent } 
    // ] 
  },
  { path: 'informacoes', component: InformacoesComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'sucesso', component: SucessoComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
