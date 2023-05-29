import { makeAutoObservable } from "mobx";
import { DiaryEntry } from "./DiaryEntry";
import { uniqueId } from "lodash";

class DiaryStore {
  entries: DiaryEntry[] = [];
  searchQuery = "";
  selectedEntry: DiaryEntry | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addDiaryEntry(
    title: string,
    description: string,
    created_date: Date,
    updated_date: Date
  ) {
    const id = uniqueId();
    const newEntry = new DiaryEntry(
      id,
      title,
      description,
      created_date,
      updated_date
    );
    this.entries.unshift(newEntry);
  }
  updateEntry(
    id: string,
    title: string,
    description: string,
    created_date: Date,
    updated_date: Date
  ) {
    const entry = this.entries.find((entry) => entry.id === id);
    if (entry) {
      entry.title = title;
      entry.description = description;
      entry.created_date = created_date;
      entry.updated_date = updated_date;
    }
  }

  deleteEntry(id: string) {
    const index = this.entries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      this.entries.splice(index, 1);
    }
  }

  selectEntry(id: string) {
    this.selectedEntry = this.entries.find((entry) => entry.id === id) ?? null;
  }

  get filteredEntries() {
    return this.entries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        entry.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

const diaryStore = new DiaryStore();
export { diaryStore };
