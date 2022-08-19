import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import { ViewComponent } from './view.component';
import { FeedbackComponent } from "./feedback.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // redirect to home page on load
  { path: '', component: HomeComponent, pathMatch: 'full'}, 
  { path: 'about', component: AboutComponent, pathMatch: 'full'},
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'logout', component:LogoutComponent},
  { path: 'feedback', component: FeedbackComponent, pathMatch: 'full'},
  { path: 'view', component: ViewComponent },
  { path: 'user', component:UserComponent},
  { path: 'admin', component:AdminComponent},
  { path: '', component:LoginComponent, pathMatch:'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
