import { useNavigate } from "react-router-dom";

import { Button } from "../ui-kit";
import { RouteName, routes } from "../../routes";
import { authStore } from "../../store";

import { observer } from "mobx-react";

export const AuthStatus = observer(() => {
  const navigate = useNavigate();

  if (!authStore.isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <p className="text-sm">You are not logged in</p>
        <Button
          classNames="bg-green-400 hover:bg-green-200"
          onClick={() => {
            navigate(routes[RouteName.LOGIN].path);
          }}
        >
          Log in
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <p className="max-w-48 truncate">Welcome, {authStore.username}! </p>
      <Button
        classNames="hover:bg-indigo-200"
        onClick={() => {
          navigate(routes[RouteName.HOME].path);
          authStore.logout();
        }}
      >
        Sign out
      </Button>
    </div>
  );
});
