import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, tap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NbaService } from 'src/app/services/nba.service';

// export interface ITodo {
//   id: string;
//   text: string;
//   complete: boolean;
// }

const INITIAL_STATE = {
  players: [],
  selectedPlayer: null,
};

@Injectable()
export class DashboardStore extends ComponentStore<any> {
  constructor(private nbaService: NbaService) {
    super(INITIAL_STATE);
  }

  // SELECTORS
  readonly players$ = this.select(({ players }) => players);
  readonly selectedPlayer$ = this.select(
    ({ selectedPlayer }) => selectedPlayer
  );

  readonly vm$ = this.select(({ players, selectedPlayer }) => ({
    players,
    selectedPlayer,
  }));

  // UPDATERS
  readonly setPlayers = this.updater((state, players: Array<any>) => {
    console.log('here');
    return { ...state, players };
  });

  readonly setSelectedPlayer = this.updater((state, selectedPlayer: any) => {
    return { ...state, selectedPlayer };
  });

  // EFFECTS
  readonly getPlayers$ = this.effect((searchTerm$: Observable<string>) => {
    return searchTerm$.pipe(
      withLatestFrom(searchTerm$),
      switchMap(([searchTerm]) => {
        return this.nbaService.getPlayer(searchTerm);
      }),
      tapResponse(
        (players) => {
          console.log('players: ', players);

          this.setPlayers(players);
        },
        (err) => console.log(err)
      )
    );
  });
}
