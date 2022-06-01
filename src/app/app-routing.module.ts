import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusPortalPageComponent } from './content/cus-portal-page/cus-portal-page.component';
import { DataViaSoundPageComponent } from './content/data-via-sound-page/data-via-sound-page.component';
import { WebshopPageComponent } from './content/webshop-page/webshop-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content/webshop', component: WebshopPageComponent },
  { path: 'content/cp', component: CusPortalPageComponent },
  { path: 'content/dataviasound', component: DataViaSoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
