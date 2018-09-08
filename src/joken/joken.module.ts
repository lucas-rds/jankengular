import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JokenComponent } from './joken.component';
import { GameComponent } from '@components/game/game.component';
import { RoomsComponent } from '@components/rooms/rooms.component';
import { MatchComponent } from '@components/match/match.component';

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
  bootstrap: [JokenComponent],
  entryComponents: [MatchComponent]
})
export class JokenModule { }
