import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './components/team/team.component';
import { PlayersComponent } from './components/players/players.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NoopAnimationsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
