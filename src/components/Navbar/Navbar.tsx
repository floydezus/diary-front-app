import { observer } from "mobx-react";
import { AddButton, AuthStatus } from "..";
import { Container, InputText } from "../ui-kit";
import { diaryStore } from "../../store";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { BookOpenIcon, PencilIcon } from "@heroicons/react/24/outline";
import { RouteName, routes } from "../../routes";
import { authStore } from "../../store";

export const Navbar = observer(() => {
  const location = useLocation();

  return (
    <header className="bg-indigo-400 min-h-max min-w-full h-20 p-2 text-white flex fixed top-0">
      <Container>
        <div className="flex gap-2 justify-between items-center h-full w-full">
          <span className="font-bold text-2xl bg-transparent">
            <Link to={"/"} className="flex">
              <BookOpenIcon width={36} height={36} />
              <PencilIcon
                width={24}
                height={24}
                className="relative right-3 bottom-2"
              />
              <strong className="bg-transparent">My Diary</strong>
            </Link>
          </span>
          {location.pathname === routes[RouteName.DIARY].path &&
            authStore.isAuthenticated && (
              <>
                <div className="self-center">
                  <InputText
                    isSearch
                    type="search"
                    placeholder="Search by diary entry"
                    name={"search"}
                    onChange={(str) => (diaryStore.searchQuery = str)}
                    value={diaryStore.searchQuery}
                  />
                </div>

                <AddButton />
              </>
            )}

          <AuthStatus />
        </div>
      </Container>
    </header>
  );
});
