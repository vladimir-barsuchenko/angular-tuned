import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { CdkComponent } from './cdk.component';
import { CdkRoutingModule } from './cdk-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    CdkRoutingModule,
  ],
  declarations: [CdkComponent],
})
export class CdkModule {}
