import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { CdkComponent } from './cdk.component';
import { CdkRoutingModule } from './cdk-routing.module';
import { PortalComponent } from './components/portal/portal.component';
import { DynamicComponent } from './components/portal/dynamic.component';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    CdkRoutingModule,
  ],
  declarations: [CdkComponent, PortalComponent, DynamicComponent],
  entryComponents: [DynamicComponent],
})
export class CdkModule {}
