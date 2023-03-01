import { Component, OnInit } from '@angular/core';
import {Encounter, EncComment} from '../../../../data/Interfaces';
import { Subscription } from 'rxjs';
import { EncounterService } from 'src/app/services/encounter.service';

@Component({
  selector: 'app-encounter-container',
  templateUrl: './encounter-container.component.html',
  styleUrls: ['./encounter-container.component.css']
})
export class EncounterContainerComponent implements OnInit {

  encounters: Encounter[] = [];

  private querySubscription: Subscription = new Subscription;

  constructor( private encounterService: EncounterService) { }

  ngOnInit(): void {

    this.querySubscription = this.encounterService.allEncounters();

  };

}
