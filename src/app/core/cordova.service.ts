import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

declare const _window;

@Injectable({
  providedIn: 'root',
})
export class CordovaService {
  private resume: BehaviorSubject<boolean>;

  constructor(private zone: NgZone) {
    this.resume = new BehaviorSubject<boolean>(null);
    fromEvent(document, 'resume').subscribe(() => {
      this.zone.run(() => {
        this.onResume();
      });
    });
  }

  get cordova(): any {
    return _window().cordova;
  }
  get onCordova(): Boolean {
    return !!_window().cordova;
  }
  public onResume(): void {
    this.resume.next(true);
  }
}
