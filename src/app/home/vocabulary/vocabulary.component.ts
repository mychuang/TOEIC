import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { timeout } from 'rxjs/operators';
import { TOEIC } from 'src/app/model/TOEIC';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {
  words: TOEIC[] = [];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getTOEIC();
  }

  getTOEIC(){
    this.service.getTOEIC().pipe(timeout(2000)).subscribe({
      next: (res) =>{
        this.words = res;
      },
      error: (e)=>{
        console.log(e);
        window.alert(`Oops! something went wrong, contact your IT specialist`);
      }
    })
  }

}
