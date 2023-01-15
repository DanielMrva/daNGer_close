import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterContainerComponent } from './encounter-container.component';

describe('EncounterContainerComponent', () => {
  let component: EncounterContainerComponent;
  let fixture: ComponentFixture<EncounterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
