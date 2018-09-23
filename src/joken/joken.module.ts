import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JokenComponent } from './joken.component';
import { GameComponent } from '@components/game/game.component';
import { RoomsComponent } from '@components/rooms/rooms.component';
import { MatchComponent } from '@components/match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from './pipes/translate.pipe';
import { ChoicePipe } from './pipes/choice.pipe';

@NgModule({
  declarations: [
    JokenComponent,
    GameComponent,
    RoomsComponent,
    MatchComponent,
    TranslatePipe,
    ChoicePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [JokenComponent],
  entryComponents: [MatchComponent]
})
export class JokenModule { }
