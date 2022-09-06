import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NbaService {
  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get('https://www.balldontlie.io/api/v1/teams');
  }

  getPlayer(name: string): Observable<any[]> {
    return this.http
      .get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
      .pipe(map((response) => (response as any).data)) as Observable<[]>;
  }

  getStats() {
    return this.http.get(
      `https://www.balldontlie.io/api/v1/season_averages?season=2014&player_ids[]=237`
    );
  }

  getStats2() {
    return this.http.get(
      `https://www.balldontlie.io/api/v1/stats?seasons[]=2002&player_ids[]=1043&postseason=true`
    );
  }
}
