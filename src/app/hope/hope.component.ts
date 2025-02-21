import { Component, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';

@Component({
  selector: 'app-hope',
  templateUrl: './hope.component.html',
  styleUrls: ['./hope.component.css']
})
export class HopeComponent implements OnInit {
 verses: any[] = [];

  constructor(private verseService: VerseService) { }

  ngOnInit() {
    this.loadVerses();
  }

  loadVerses() {
    this.verseService.getVerses('hope').subscribe(data => {
      this.verses = data;
    });
  }
}
