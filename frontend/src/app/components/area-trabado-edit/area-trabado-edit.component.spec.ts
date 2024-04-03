import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTrabadoEditComponent } from './area-trabado-edit.component';

describe('AreaTrabadoEditComponent', () => {
  let component: AreaTrabadoEditComponent;
  let fixture: ComponentFixture<AreaTrabadoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaTrabadoEditComponent]
    });
    fixture = TestBed.createComponent(AreaTrabadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
