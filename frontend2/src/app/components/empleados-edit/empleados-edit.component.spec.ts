import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosEditComponent } from './empleados-edit.component';

describe('EmpleadosEditComponent', () => {
  let component: EmpleadosEditComponent;
  let fixture: ComponentFixture<EmpleadosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosEditComponent]
    });
    fixture = TestBed.createComponent(EmpleadosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
