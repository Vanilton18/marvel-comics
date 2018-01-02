import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AuthServiceService } from './services/auth-service.service';
import { ComicsService } from './services/comics.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ComicsComponent } from './comics/comics.component';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthServiceService,
    ComicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
