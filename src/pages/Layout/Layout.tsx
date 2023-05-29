import { Outlet } from "react-router-dom";
import { EntryControl, Navbar } from "../../components";
import { Container, Modal } from "../../components/ui-kit";
import { observer } from "mobx-react";
import { interfaceStore, diaryStore } from "../../store";

export const Layout = observer(() => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="mt-20">
          <Outlet />
        </div>
      </Container>
      <Modal
        isOpen={interfaceStore.isDlgOpen}
        setClose={() => interfaceStore.setDlgOpen(false)}
        children={<EntryControl entry={diaryStore.selectedEntry} />}
      />
    </div>
  );
});
