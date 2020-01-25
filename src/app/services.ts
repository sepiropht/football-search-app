import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { league, team } from "./interfaces";

@Injectable()
export class Services {
  private searchUrl = "/api/v1/leagues/search";
  private teamUrl = "/api/v1/team/id";

  constructor(private http: Http) {}

  // get("/api/v1/leagues/search")
  searchLeagues(search: string): Promise<league[]> {
    return this.http
      .get(`${this.searchUrl}?search=${search}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getTeamById(id: string): Promise<team> {
    return this.http
      .get(`${this.teamUrl}?id=${id}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";
    console.error(errMsg); // log to console instead
  }
}
