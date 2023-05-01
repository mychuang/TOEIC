import { Component, OnInit } from '@angular/core';
import { MOCK } from 'src/app/model/MOCK';
import { TOEIC } from 'src/app/model/TOEIC';

@Component({
  selector: 'app-voclist',
  templateUrl: './voclist.component.html',
  styleUrls: ['./voclist.component.css']
})
export class VoclistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentIndex = 0;

  words: TOEIC[] = MOCK;
  currentWord: TOEIC = this.words[0];

  prevVocabulary() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentWord = this.words[this.currentIndex];
    }
  }

  nextVocabulary() {
    if (this.currentIndex < this.words.length - 1) {
      this.currentIndex++;
      this.currentWord = this.words[this.currentIndex];
    }
  }

}
