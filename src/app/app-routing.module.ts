import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
  { path: 'list-users', component: ListUserComponent, canActivate: [AuthGuardService] },
  { path: 'detail-user/:id', component: DetailUserComponent, canActivate: [AuthGuardService] },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
