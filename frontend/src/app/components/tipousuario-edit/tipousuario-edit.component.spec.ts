import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioEditComponent } from './tipousuario-edit.component';

describe('TipousuarioEditComponent', () => {
  let component: TipousuarioEditComponent;
  let fixture: ComponentFixture<TipousuarioEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipousuarioEditComponent]
    });
    fixture = TestBed.createComponent(TipousuarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
