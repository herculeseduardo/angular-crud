import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ApiService } from './core/api.service';
import { TokenInterceptor } from './core/interceptor';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    AboutComponent,
    ListUserComponent,
    DetailUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
