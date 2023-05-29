import { observer } from "mobx-react";
import { FC, useState } from "react";
import { diaryStore, interfaceStore } from "../../store";
import { DiaryEntry } from "../../store/DiaryEntry";
import { Button, InputText } from "../ui-kit";
import { BookOpenIcon } from "@heroicons/react/24/outline";

type Props = {
  entry: DiaryEntry | null;
};
export const EntryControl: FC<Props> = observer(({ entry }) => {
  const [title, setTitle] = useState(entry?.title ?? "");
  const [description, setDescription] = useState(entry?.description ?? "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newDate = new Date();
    if (entry) {
      diaryStore.updateEntry(
        entry.id,
        title,
        description,
        entry.created_date,
        newDate
      );
    } else {
      diaryStore.addDiaryEntry(title, description, newDate, newDate);
    }
    setTitle("");
    setDescription("");
    interfaceStore.setDlgOpen(false);
  };

  return (
    <div>
      <h1 className="font-bold text-lg">
        {entry ? "Update" : "Create"} an entry
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div>
          <label>Title:</label>
          <InputText
            placeholder="Type a title for this entry"
            name={"title"}
            onChange={setTitle}
            value={title}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <InputText
            placeholder="Type a description for this entry"
            name={"description"}
            onChange={setDescription}
            value={description}
            required
          />
        </div>
        <footer className="flex justify-end mt-6 gap-2">
          <Button onClick={() => interfaceStore.setDlgOpen(false)}>
            Cancel
          </Button>
          <Button
            classNames="bg-green-400"
            icon={<BookOpenIcon />}
            type="submit"
          >
            {entry ? "Update" : "Create"}
          </Button>
        </footer>
      </form>
    </div>
  );
});
