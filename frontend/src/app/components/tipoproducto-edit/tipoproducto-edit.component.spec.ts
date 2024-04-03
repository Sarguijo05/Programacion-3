import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoEditComponent } from './tipoproducto-edit.component';

describe('TipoproductoEditComponent', () => {
  let component: TipoproductoEditComponent;
  let fixture: ComponentFixture<TipoproductoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoproductoEditComponent]
    });
    fixture = TestBed.createComponent(TipoproductoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
