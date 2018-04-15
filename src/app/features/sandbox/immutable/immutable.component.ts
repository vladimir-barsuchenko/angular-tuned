import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-immutable',
  templateUrl: './immutable.component.html',
  styleUrls: ['./immutable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmutableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let list = Immutable.List();
    list = list.push(1);
    list = list.push(2);
    list = list.push(3);
    const it = list.valueSeq().toJS();
    console.log(it);
  }
}
