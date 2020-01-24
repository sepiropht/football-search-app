import { Component, OnInit } from "@angular/core";
import { Services } from "./services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [Services]
})
export class AppComponent implements OnInit {
  leagues = [];

  constructor(private services: Services) {}

  ngOnInit() {
    this.services.searchLeagues().then((leagues: any[]) => {
      console.log(leagues)
    });
  }
}
