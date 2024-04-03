import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesEditComponent } from './sucursales-edit.component';

describe('SucursalesEditComponent', () => {
  let component: SucursalesEditComponent;
  let fixture: ComponentFixture<SucursalesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalesEditComponent]
    });
    fixture = TestBed.createComponent(SucursalesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
