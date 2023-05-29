import { observer } from "mobx-react";
import { interfaceStore } from "../../store";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui-kit";

export const AddButton = observer(() => {
  const handlerAdd = () => {
    interfaceStore.setDlgOpen(true);
  };
  return (
    <Button
      icon={<PlusIcon />}
      onClick={handlerAdd}
      classNames="bg-green-400 hover:bg-green-300"
    >
      Add new entry
    </Button>
  );
});
