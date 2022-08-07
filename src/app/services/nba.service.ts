import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NbaService {
  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get('https://www.balldontlie.io/api/v1/teams');
  }

  getPlayers(name: string) {
    return this.http.get(
      `https://www.balldontlie.io/api/v1/players?search=${name}`
    );
  }

  getStats() {
    return this.http.get(
      `https://www.balldontlie.io/api/v1/season_averages?season=2014&player_ids[]=237`
    );
  }

  getStats2() {
    return this.http.get(
      `https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]=115&postseason=true`
    );
  }
}
