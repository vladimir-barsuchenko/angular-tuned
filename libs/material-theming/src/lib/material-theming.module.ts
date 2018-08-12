import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatRippleModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
  ],
})
export class MaterialThemingModule {}
