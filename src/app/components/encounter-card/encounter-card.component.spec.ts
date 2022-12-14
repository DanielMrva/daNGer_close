import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterCardComponent } from './encounter-card.component';

describe('EncounterCardComponent', () => {
  let component: EncounterCardComponent;
  let fixture: ComponentFixture<EncounterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
