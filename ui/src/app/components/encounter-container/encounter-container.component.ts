import { Component, OnInit } from '@angular/core';
import {Encounter, EncComment} from '../../../../data/Interfaces';
import { Observable } from 'rxjs';
import { EncounterService } from 'src/app/services/encounter.service';

@Component({
  selector: 'app-encounter-container',
  templateUrl: './encounter-container.component.html',
  styleUrls: ['./encounter-container.component.css']
})
export class EncounterContainerComponent implements OnInit {

  allEncounters!: Observable<any>;
  // userEncounters!: Observable<any>;
  testEncounters!: Observable<any>


  constructor( private encounterService: EncounterService) { }

  ngOnInit(): void {
    // this.allEncounters = this.encounterService.allEncounters();
    // this.userEncounters = this.encounterService.userEncounters('d.mrva');
    // this.testEncounters = this.encounterService.singleEncounter('64040d2c342cb7ff65d7602d')
    this.testEncounters = this.encounterService.visEncounters(39,42,-105,-100);

    
  };

}
