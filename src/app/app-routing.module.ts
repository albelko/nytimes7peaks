import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { DetailComponent } from '@pages/detail/detail.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { AboutComponent } from '@pages/about/about.component';


const routes: Routes = [
  {
    path: 'articles',
    component: HomeComponent
  },
  {
    path: 'articles/:id',
    component: DetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
