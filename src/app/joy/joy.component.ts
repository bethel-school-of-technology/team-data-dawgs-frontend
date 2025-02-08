import { Component, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';

@Component({
  selector: 'app-joy',
  templateUrl: './joy.component.html',
  styleUrls: ['./joy.component.css']
})
export class JoyComponent implements OnInit {
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

  createVerse(newVerse: any) {
    this.verseService.createVerse(newVerse).subscribe(() => {
      this.loadVerses();
    });
  }

  deleteVerse(verseId: number) {
    this.verseService.deleteVerse(verseId).subscribe(() => {
      this.loadVerses();
    });
  }
}
