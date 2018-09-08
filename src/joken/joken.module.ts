import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JokenComponent } from './joken.component';
import { GameComponent } from './game/game.component';
import { RoomsComponent } from './rooms/rooms.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    JokenComponent,
    GameComponent,
    RoomsComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokenComponent]
})
export class JokenModule { }
