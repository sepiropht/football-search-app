import { Component, OnInit } from "@angular/core";
import { Services } from "./services";
import { FormControl } from '@angular/forms';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Services]
})
export class AppComponent {
  leagues = [];
  placeholder = 'Votre recherche';
  searchTerm: string;
  

  constructor(private services: Services) {}

  search() {
    this.services.searchLeagues(this.searchTerm).then((leagues: any[]) => {
      console.log(leagues)
    });
  }
}
