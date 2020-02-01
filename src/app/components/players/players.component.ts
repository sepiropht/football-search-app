import { Component, OnInit } from '@angular/core';
import { Services } from '../../services';
import {Location} from '@angular/common';
import _ from 'lodash';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [Services]
})
export class PlayersComponent implements OnInit {
  players
  isPlayerEmpty : boolean

  constructor(private service: Services, private location: Location) { }

  ngOnInit() {
    const playersIds = _.get(window.history, 'state.state.data', []);
    Promise.all(
      playersIds.map(id => this.service.getPlayerById(id))
    ).then(players =>  { 
      this.players = players;
      if(!this.players.length) {
        this.isPlayerEmpty = true;
      }

    });
  }

  back() {
    this.location.back();
  }

}
