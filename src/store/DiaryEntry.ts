import { makeAutoObservable } from "mobx";

export class DiaryEntry {
  constructor(
    id: string,
    title: string,
    description: string,
    created_date: Date,
    updated_date: Date
  ) {
    makeAutoObservable(this);
    this.title = title;
    this.description = description;
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.id = id;
  }
  title: string;
  description: string;
  created_date: Date;
  updated_date: Date;
  id: string;

  setTitle(title: string) {
    this.title = title;
  }

  setDescription(description: string) {
    this.description = description;
  }
}
