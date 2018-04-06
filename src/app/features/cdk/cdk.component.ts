import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
