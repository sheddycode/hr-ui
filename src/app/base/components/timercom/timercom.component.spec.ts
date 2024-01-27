import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimercomComponent } from './timercom.component';

describe('TimercomComponent', () => {
  let component: TimercomComponent;
  let fixture: ComponentFixture<TimercomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimercomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
