import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-immutable',
  templateUrl: './immutable.component.html',
  styleUrls: ['./immutable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmutableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
