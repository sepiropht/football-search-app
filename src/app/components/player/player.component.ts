import { Component, OnInit, Input } from '@angular/core';
import { player } from '../../interfaces';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: player;
  constructor() { }

  ngOnInit() {
    console.log(this.player)
  }

}
