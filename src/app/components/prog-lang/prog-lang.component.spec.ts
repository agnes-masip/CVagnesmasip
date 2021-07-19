import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgLangComponent } from './prog-lang.component';

describe('ProgLangComponent', () => {
  let component: ProgLangComponent;
  let fixture: ComponentFixture<ProgLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgLangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
