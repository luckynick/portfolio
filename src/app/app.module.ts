import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule, MatNavList } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactBottomSheetComponent } from './contact-bottom-sheet/contact-bottom-sheet-component';
import { LangSelectionComponent } from './lang-selection/lang-selection.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavAnchorDirective } from './nav-anchor.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactBottomSheetComponent,
    LangSelectionComponent,
    NavBarComponent,
    NavAnchorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
