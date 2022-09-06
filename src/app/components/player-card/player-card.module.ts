import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './player-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [PlayerCardComponent],
  exports: [PlayerCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class PlayerCardModule {}
