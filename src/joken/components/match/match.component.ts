import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, timer, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import GameSocketService from '@services/game-socket.service';
import Match from '@models/match.model';
import PlayerService from '@services/player.service';

@Component({
  selector: 'joken-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit, OnDestroy {

  @ViewChild('video') video: any;
  private room$ = new BehaviorSubject<any>({});
  public match: Match = {
    id: undefined,
    room: undefined,
    players: [],
    result: undefined
  };
  public isMatchRunning = false;
  public gameEnded = false;
  public matchResult;
  public timer = 1;
  public myChoice;
  public enemyChoice;

  private onMatchStartedSubscription: Subscription;
  private playerChoosedSubscription: Subscription;

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
    this.onMatchStartedSubscription = this.gameSocketService.onMatchStarted(this.room).subscribe(this.enableMatchPlay);
    this.playerChoosedSubscription = this.gameSocketService.onPlayerChoosed(this.room).subscribe(this.playerChoosedValue);
  }

  ngOnDestroy() {
    this.room$.unsubscribe();
    this.onMatchStartedSubscription.unsubscribe();
    this.playerChoosedSubscription.unsubscribe();
  }

  getOut() {
    location.reload();
  }

  waitPlayersToStartMatch = (room) => {
    if (room.players.length === 2) {
      this.gameSocketService.startMatch(room);
    }
  }

  playerChoosedValue = ({ match }) => {
    this.match = match;
    if (this.allPlayersChoose()) {
      this.start();
    }
  }

  enableMatchPlay = (match) => {
    this.match = match;
  }

  updateMatchPlayerInfo(match, player) {
    const playerIndex = match.players.findIndex(x => x.id === this.playerService.getSessionPlayer().id);
    match.players[playerIndex] = player;
  }

  chooseOption(choice, label) {
    const player = { ...this.playerService.getSessionPlayer(), choice };
    this.updateMatchPlayerInfo(this.match, player);
    this.gameSocketService.emitPlayerChoose(player, this.match, choice);
    this.myChoice = choice;
  }

  allPlayersChoose() {
    return this.match ? this.match.players.every(player => !!player.choice) : false;
  }

  getEnemyChoice() {
    const myself = this.playerService.getSessionPlayer();
    const [enemy] = this.match.players.filter(player => player.id !== myself.id);
    return enemy.choice;
  }

  start() {
    this.isMatchRunning = true;
    this.video.nativeElement.play();
    setTimeout(() => {
      this.isMatchRunning = false;
      this.gameEnded = true;
      const player = this.playerService.getSessionPlayer();
      this.matchResult = this.match.result[player.id];
      this.enemyChoice = this.getEnemyChoice();
      this.gameSocketService.disconnect();
    }, 4600);
  }
}
