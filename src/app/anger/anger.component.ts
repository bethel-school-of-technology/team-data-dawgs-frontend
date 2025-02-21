import { Component, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';

@Component({
  selector: 'app-anger',
  templateUrl: './anger.component.html',
  styleUrls: ['./anger.component.css']
})
export class AngerComponent implements OnInit {
  
  verses: any[] = [];

  constructor(private verseService: VerseService) { }

  ngOnInit() {
    this.loadVerses();
  }

  loadVerses() {
    this.verseService.getVerses('anger').subscribe(data => {
      this.verses = data;
    });
  }
}
