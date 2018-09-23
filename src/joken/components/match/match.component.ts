import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BehaviorSubject, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import GameSocketService from '@services/game-socket.service';
import Match from '@models/match.model';
import PlayerService from '@services/player.service';

@Component({
  selector: 'joken-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @ViewChild('video') video: any;
  private room$ = new BehaviorSubject<any>({});
  public match: Match = {
    id: undefined,
    room: undefined,
    players: [],
    result: undefined
  };
  public choiceLabel = '';
  public isMatchRunning = false;
  public gameEnded = false;
  public matchResult;
  public timer = 1;

  constructor(private gameSocketService: GameSocketService,
    private playerService: PlayerService) {
  }

  @Input()
  set room(value) {
    this.room$.next(value);
  }

  get room() {
    return this.room$.getValue();
  }

  ngOnInit() {
    this.room$.subscribe(this.waitPlayersToStartMatch);
    this.gameSocketService.onMatchStarted(this.room).subscribe(this.enableMatchPlay);
    this.gameSocketService.onPlayerChoosed(this.room).subscribe(this.playerChoosedValue);
  }

  waitPlayersToStartMatch = (room) => {
    if (room.players.length === 2) {
      this.gameSocketService.startMatch(room);
    }
  }

  playerChoosedValue = (data) => {
    this.match = data.match;
    console.log('match ', this.match);
    console.log('all players ', this.allPlayersChoose());

    if (this.allPlayersChoose()) {
      this.start();
      // interval(1000)
      //   .pipe(takeUntil(timer(4000)))
      //   .subscribe(t => { this.timer = t + 1; });
    }
  }

  enableMatchPlay = (match) => {
    this.match = match;
  }

  chooseOption(value, label) {
    const player = this.match.players.find(x => x.id === this.playerService.getSessionPlayer().id);
    player.choice = value;

    this.gameSocketService.emitPlayerChoose(this.playerService.getSessionPlayer(), this.match, value);
    this.choiceLabel = label;
  }

  allPlayersChoose() {
    return this.match ? this.match.players.every(player => !!player.choice) : false;
  }

  start() {
    this.isMatchRunning = true;
    this.video.nativeElement.play();
    setTimeout(() => {
      this.isMatchRunning = false;
      this.gameEnded = true;
      const player = this.playerService.getSessionPlayer();
      this.matchResult = this.match.result[player.id];
    }, 4600);
  }
}
