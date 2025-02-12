import { Component, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';

@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.css']
})
export class AnxietyComponent implements OnInit {
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

  updateVerse(id: number, updatedVerse: any) {
    this.verseService.updateVerse(id, updatedVerse).subscribe(() => {
      this.loadVerses();
    });
  }

  deleteVerse(verseId: number) {
    this.verseService.deleteVerse(verseId).subscribe(() => {
      this.loadVerses();
    });
  }
}
