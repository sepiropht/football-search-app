import { Component, OnInit, Input } from '@angular/core';
import { team } from '../../interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team: team;
  constructor() { }

  ngOnInit() {
    console.log(this.team)
  }



}
