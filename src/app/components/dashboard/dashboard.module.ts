import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PlayerCardModule } from '../player-card/player-card.module';
import { DashboardStore } from './dashboard.store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    PlayerCardModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [DashboardStore],
})
export class DashboardModule {}
