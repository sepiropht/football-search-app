import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Services } from "../../services";
import { league, team, player } from "../../interfaces";
import _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [Services]
})
export class HomeComponent {
  leagues: Array<league>;
  teams: Array<team>;
  players: Array<player>;
  placeholder = "Votre recherche";
  searchTerm: string;
  isTeamsEmpty: boolean;
  leagueName: string;

  constructor(private services: Services, private router: Router) {}

  search() {
    this.isTeamsEmpty = false;
    this.services.searchLeagues(this.searchTerm).then(leagues => {
      this.leagues = leagues;
      const teamsIds = this.leagues.flatMap(({ teams }) => teams.map(id => id));
      if(!teamsIds.length) {
        this.isTeamsEmpty = true;
        this.leagueName = _.get(this.leagues[0], 'name');
      }

      Promise.all(teamsIds.map(id => this.services.getTeamById(id)))
        .then(teams => {
          this.teams = teams;
        })
        .catch(err => console.log(err));
    });
  }
}
