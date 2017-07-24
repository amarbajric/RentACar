import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RouterGuard} from "./services/route-guard.service";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {PageNotFoundComponent} from "./not-found-component/not-found.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouterGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'edit-customer',
    component: CustomerEditComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }


];

export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);

