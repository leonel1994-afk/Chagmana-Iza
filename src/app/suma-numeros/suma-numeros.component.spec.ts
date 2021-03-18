import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaNumerosComponent } from './suma-numeros.component';

describe('SumaNumerosComponent', () => {
  let component: SumaNumerosComponent;
  let fixture: ComponentFixture<SumaNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaNumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
