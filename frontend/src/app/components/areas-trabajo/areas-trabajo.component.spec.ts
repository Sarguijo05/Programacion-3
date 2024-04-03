import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasTrabajoComponent } from './areas-trabajo.component';

describe('AreasTrabajoComponent', () => {
  let component: AreasTrabajoComponent;
  let fixture: ComponentFixture<AreasTrabajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasTrabajoComponent]
    });
    fixture = TestBed.createComponent(AreasTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
