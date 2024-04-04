import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagoComponent } from './formapago.component';

describe('FormapagoComponent', () => {
  let component: FormapagoComponent;
  let fixture: ComponentFixture<FormapagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormapagoComponent]
    });
    fixture = TestBed.createComponent(FormapagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
