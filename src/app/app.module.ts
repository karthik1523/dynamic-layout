import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SideNavbarComponent } from './component/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
