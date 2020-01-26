import { Component, OnInit } from '@angular/core';
import { player } from '../../interfaces';
import { Services } from '../../services';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  providers: [Services]
})
export class PlayersComponent implements OnInit {
  players

  constructor(private service: Services) { }

  ngOnInit() {
    const playersIds = window.history.state.state.data;
    Promise.all(
      playersIds.map(id => this.service.getPlayerById(id))
    ).then(players =>  this.players = players);
  }

}
