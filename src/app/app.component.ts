import { Component, OnInit } from "@angular/core";
import { Services } from "./services";
import { league, team, player } from "./interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Services]
})
export class AppComponent {
  leagues: Array<league>;
  teams: Array<team>;
  players: Array<player>
  placeholder = "Votre recherche";
  searchTerm: string;

  constructor(private services: Services) {}

  search() {
    this.services.searchLeagues(this.searchTerm).then(leagues => {
      this.leagues = leagues;
      console.log(this.leagues);
      const teamsIds = this.leagues.flatMap(({ teams }) => teams.map(id => id));

      Promise.all(teamsIds.map(id => this.services.getTeamById(id)))
        .then(teams => {
          this.teams = teams;
          console.log(teams);

  
        })
        .catch(err => console.log(err));
    });
  }

  fetchPlayer(team) {
    const playerIds = team.players.flatMap(id => id);

    Promise.all(
      playerIds.map(id => this.services.getPlayerById(id))
    ).then(players => players);

  }
}
