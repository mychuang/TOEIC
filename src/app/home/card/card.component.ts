import { Component, Input, OnInit } from '@angular/core';
import { TOEIC } from 'src/app/model/TOEIC';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() word: TOEIC;

  constructor() { }

  ngOnInit(): void {
  }

}
