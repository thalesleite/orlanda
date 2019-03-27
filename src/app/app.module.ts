import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {MessageService} from './message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { ContatoComponent } from './contato/contato.component';
import { NavComponent } from './nav/nav.component';
import { HistoriaComponent } from './home/historia/historia.component';
import { CarouselImagesComponent } from './home/carousel-images/carousel-images.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformacoesComponent,
    ServicosComponent,
    SucessoComponent,
    ContatoComponent,
    NavComponent,
    HistoriaComponent,
    CarouselImagesComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
