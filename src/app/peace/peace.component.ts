import { Component, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';

@Component({
  selector: 'app-peace',
  templateUrl: './peace.component.html',
  styleUrls: ['./peace.component.css']
})
export class PeaceComponent implements OnInit {
 verses: any[] = [];

  constructor(private verseService: VerseService) { }

  ngOnInit() {
    this.loadVerses();
  }

  loadVerses() {
    this.verseService.getVerses().subscribe(data => {
      this.verses = data;
    });
  }

}
