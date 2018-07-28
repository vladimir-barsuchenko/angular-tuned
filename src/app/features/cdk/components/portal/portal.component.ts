import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CdkPortal, ComponentPortal, Portal } from '@angular/cdk/portal';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortalComponent implements OnInit {
  @ViewChildren(CdkPortal) templatePortals: QueryList<Portal<any>>;

  selectedPortal: Portal<any>;

  constructor() {}

  ngOnInit(): void {}

  get programmingJoke() {
    return this.templatePortals.first;
  }

  get mathJoke() {
    return this.templatePortals.last;
  }

  get scienceJoke() {
    return new ComponentPortal(DynamicComponent);
  }
}
