import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalModule } from '@angular/cdk/portal';

import { PortalComponent } from './portal.component';


describe('PortalComponent', () => {
  let component: PortalComponent;
  let fixture: ComponentFixture<PortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalModule],
      declarations: [PortalComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
