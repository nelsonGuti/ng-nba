import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
