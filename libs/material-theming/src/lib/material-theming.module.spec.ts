
import { async, TestBed } from '@angular/core/testing';
import { MaterialThemingModule } from './material-theming.module';

describe('MaterialThemingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialThemingModule ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(MaterialThemingModule).toBeDefined();
  });
});
      