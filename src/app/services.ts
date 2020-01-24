import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class Services {
  private searchUrl = "/api/v1/leagues/search";

  constructor(private http: Http) {}

  // get("/api/contacts")
  searchLeagues(): Promise<void | any[]> {
    return this.http
      .get(this.searchUrl)
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
