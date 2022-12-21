import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Encounter } from '../../../../data/Interfaces';


@Component({
  selector: 'app-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.css']
})
export class EncounterCardComponent implements OnInit {
  @Input() encounter!: Encounter

  constructor() { }

  ngOnInit(): void {
  }

}
