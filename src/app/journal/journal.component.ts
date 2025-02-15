import { Component } from '@angular/core';
import { JournalService } from '../journal.service';

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
  editingIndex: number | null = null; 

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

  editEntry(index: number) {
    this.editingIndex = index; 
    this.entryContent = this.journalEntries[index].content; 
  }

  saveEntry(index: number) {
    this.journalEntries[index].content = this.entryContent; 
    this.entryContent = ''; 
    this.editingIndex = null; 
  }

  cancelEdit() {
    this.entryContent = ''; 
    this.editingIndex = null; 
  }

  deleteEntry(index: number) {
    this.journalEntries.splice(index, 1);
  }

  constructor(private journalService: JournalService) { }
  
    ngOnInit() {
      this.loadJournals();
    }
  
    loadJournals() {
      this.journalService.getJournals().subscribe(data => {
        this.journalEntries = data;
      });
    }
  
    createJournal(newJournal: any) {
      this.journalService.createJournal(newJournal).subscribe(() => {
        this.loadJournals();
      });
    }
  
    updateJournal(id: number, updatedJournal: any) {
      this.journalService.updateJournal(id, updatedJournal).subscribe(() => {
        this.loadJournals();
      });
    }
  
    deleteJournal(journalId: number) {
      this.journalService.deleteJournal(journalId).subscribe(() => {
        this.loadJournals();
      });
    }
}
