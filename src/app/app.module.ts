import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddressCardComponent } from './components/address-card/address-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
