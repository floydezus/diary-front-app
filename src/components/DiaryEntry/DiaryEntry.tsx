import { observer } from "mobx-react";
import { FC } from "react";
import { diaryStore, interfaceStore } from "../../store";
import { DiaryEntry as DiaryEntryType } from "../../store/DiaryEntry";
import { Button } from "../ui-kit";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  entry: DiaryEntryType;
};
export const DiaryEntry: FC<Props> = observer(({ entry }) => {
  const handleUpdate = () => {
    diaryStore.selectEntry(entry.id);
    interfaceStore.setDlgOpen(true);
  };

  return (
    <div className="shadow-xl rounded grid-cols-[auto, 150px] p-6 w-2/3 mx-auto">
      <strong className="text-xl">{entry.title}</strong>
      <p className="mt-2 bg-amber-100 text-indigo-800 rounded min-h-25 p-2">
        {entry.description}
      </p>

      <div className="mt-20 flex justify-between">
        <div className="">
          <p className="text-sm text-gray-400">
            Created at:{" "}
            <time dateTime={entry.created_date.toISOString()}>
              {entry.created_date.toLocaleString()}
            </time>
          </p>
          <p className="text-sm text-gray-400">
            Updated at:{" "}
            <time dateTime={entry.updated_date.toISOString()}>
              {entry.updated_date.toLocaleString()}
            </time>
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            classNames="hover:bg-gray-200"
            icon={<PencilSquareIcon />}
            onClick={handleUpdate}
          >
            Update
          </Button>
          <Button
            icon={<TrashIcon />}
            classNames="bg-red-400 hover:bg-red-300"
            onClick={() => diaryStore.deleteEntry(entry.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
});
