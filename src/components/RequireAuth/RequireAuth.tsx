import { Navigate, useLocation } from "react-router-dom";
import { RouteName, routes } from "../../routes";
import { authStore } from "../../store";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();

  if (!authStore.isAuthenticated) {
    return (
      <Navigate
        to={routes[RouteName.LOGIN].path}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
