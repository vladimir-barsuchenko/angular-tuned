import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxComponent } from './sandbox.component';
import { SandboxRoutingModule } from './sandbox-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SandboxRoutingModule,
  ],
  declarations: [SandboxComponent],
})
export class SandboxModule {}
