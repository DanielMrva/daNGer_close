import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { EncounterCardComponent } from './components/encounter-card/encounter-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EncounterContainerComponent } from './components/encounter-container/encounter-container.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { GraphQLModule } from './graphql.module';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'user', component: UserPageComponent
  }
]

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
    EncounterContainerComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    NgbModule,
    GraphQLModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
