import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusPortalPageComponent } from './content/cus-portal-page/cus-portal-page.component';
import { CzestochowaPageComponent } from './content/czestochowa-page/czestochowa-page.component';
import { DataViaSoundPageComponent } from './content/data-via-sound-page/data-via-sound-page.component';
import { WebshopPageComponent } from './content/webshop-page/webshop-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'content/webshop', component: WebshopPageComponent, 
    data: { description: $localize `Webshop for your business` } 
  },
  { 
    path: 'content/cp', component: CusPortalPageComponent, 
    data: { description: $localize `Creating software for your needs` } 
  },
  { 
    path: 'content/dataviasound', component: DataViaSoundPageComponent, 
    data: { description: $localize `Creating software for your needs` }  
  },
  { 
    path: 'content/czestochowa', component: CzestochowaPageComponent, 
    data: { description: $localize `IT solutions for business in Czestochowa` }  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
