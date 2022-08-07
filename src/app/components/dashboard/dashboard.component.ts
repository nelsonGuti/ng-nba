import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  playerName = '';
  constructor(private nbaService: NbaService) {}

  ngOnInit() {
    this.nbaService.getTeams().subscribe((data) => {
      console.log('data: ', data);
    });

    this.nbaService.getStats2().subscribe((data) => {
      console.log('data: ', data);
    });
  }

  searchPlayer() {
    console.log(this.playerName);
    this.nbaService.getPlayers(this.playerName).subscribe((data) => {
      console.log('data: ', data);
    });
  }
}
