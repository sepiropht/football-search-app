import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("PlayersComponent")
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    })
  }

}
