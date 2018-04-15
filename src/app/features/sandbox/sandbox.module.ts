import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxComponent } from './sandbox.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { ImmutableComponent } from './immutable/immutable.component';


@NgModule({
  imports: [
    CommonModule,
    SandboxRoutingModule,
  ],
  declarations: [SandboxComponent, ImmutableComponent],
})
export class SandboxModule {}
