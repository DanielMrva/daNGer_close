import { Component, OnInit } from '@angular/core';
import {Encounter, EncComment} from '../../../../data/Interfaces';
import { EncounterService } from 'src/app/services/encounter.service';

@Component({
  selector: 'app-encounter-container',
  templateUrl: './encounter-container.component.html',
  styleUrls: ['./encounter-container.component.css']
})
export class EncounterContainerComponent implements OnInit {

  encounters: Encounter[] = [];

  constructor( private encounterService: EncounterService) { }

  ngOnInit(): void {
    this.encounterService.getEncounters().subscribe((encounters) => (this.encounters = encounters));
  };

}
