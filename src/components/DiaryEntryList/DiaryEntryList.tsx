import { observer } from "mobx-react";

import { diaryStore } from "../../store";
import { AddButton, DiaryEntry } from "..";

export const DiaryEntryList = observer(() => {
  if (diaryStore.entries.length === 0) {
    return (
      <div className="text-center flex flex-col mt-20">
        <span className="text-4xl">Entries is empty</span>
        <div className="mt-4">
          <AddButton />
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      <ul className="flex flex-col gap-4">
        {diaryStore.filteredEntries.map((it) => (
          <li key={it.id}>
            <DiaryEntry entry={it} />
          </li>
        ))}
      </ul>
    </div>
  );
});
