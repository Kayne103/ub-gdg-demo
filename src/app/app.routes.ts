import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {WorkshopsComponent} from './pages/workshops/workshops.component';

export const routes: Routes = [
  {path:'', component:HomePageComponent, title:'UB GDG: Home'},
  {path:'workshops' ,component:WorkshopsComponent, title:'UB GDG: Workshops'}

];
