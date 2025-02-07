import { Component } from '@angular/core';

interface JournalEntry {
  content: string;
  date: Date;
}

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  entryContent: string = '';
  journalEntries: JournalEntry[] = [];

  postEntry() {
    if (this.entryContent.trim()) {
      const newEntry: JournalEntry = {
        content: this.entryContent,
        date: new Date()
      };
      this.journalEntries.push(newEntry);
      this.entryContent = ''; 
    }
  }

  deleteEntry(index: number) {
    this.journalEntries.splice(index, 1);
  }
}
