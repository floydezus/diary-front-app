import { makeAutoObservable, reaction } from "mobx";
import { diaryStore } from ".";

class InterfaceStore {
  isDlgOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setDlgOpen(value: boolean) {
    this.isDlgOpen = value;
  }
}

const interfaceStore = new InterfaceStore();
reaction(
  () => interfaceStore.isDlgOpen,
  (isDlgOpen) => {
    if (!isDlgOpen) {
      diaryStore.selectedEntry = null;
    }
  }
);
export { interfaceStore };
