import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagoEditComponent } from './formapago-edit.component';

describe('FormapagoEditComponent', () => {
  let component: FormapagoEditComponent;
  let fixture: ComponentFixture<FormapagoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormapagoEditComponent]
    });
    fixture = TestBed.createComponent(FormapagoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
