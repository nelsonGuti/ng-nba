import { Component, OnInit } from '@angular/core';
import {
  debounce,
  Subject,
  throttleTime,
  distinctUntilChanged,
  Observable,
  map,
  interval,
  debounceTime,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { NbaService } from 'src/app/services/nba.service';
import { DashboardStore } from './dashboard.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  playerName = '';
  players = [];
  results$: Observable<any> | undefined;
  subject = new Subject();
  vm$ = this.store.vm$;
  constructor(private nbaService: NbaService, private store: DashboardStore) {}

  ngOnInit() {
    this.results$ = this.subject.pipe(
      debounceTime(500),

      map((searchTerm: any) => {
        console.log('searchTerm: ', searchTerm);

        return this.nbaService.getPlayer(searchTerm);
      }),
      switchMap((response: any) => {
        return response.pipe(map((players: any) => players.data));
      })
    );
  }

  searchPlayer(searchTerm: string) {
    console.log('searchTerm: ', searchTerm);
    this.store.getPlayers$(searchTerm);
    this.subject.next(searchTerm);
  }

  clearInput() {
    this.store.setPlayers([]);
  }
}
