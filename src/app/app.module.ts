import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user/page/user-page/user-page.component';
import { UserDetailsComponent } from './user/page/user-details/user-details.component';
import { DisplayComponent } from './user/component/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserDetailsComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
