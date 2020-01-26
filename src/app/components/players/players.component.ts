import { Component, OnInit } from '@angular/core';
import { Services } from '../../services';
import _ from 'lodash';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [Services]
})
export class PlayersComponent implements OnInit {
  players

  constructor(private service: Services) { }

  ngOnInit() {
    const playersIds = _.get(window.history, 'state.state.data', []);
    Promise.all(
      playersIds.map(id => this.service.getPlayerById(id))
    ).then(players =>  this.players = players);
  }

}
