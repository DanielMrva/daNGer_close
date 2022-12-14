import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { EncounterCardComponent } from './components/encounter-card/encounter-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavComponent,
    EncounterCardComponent,
    CommentCardComponent,
    HomePageComponent,
    UserPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
