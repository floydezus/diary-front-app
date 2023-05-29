import { Link } from "react-router-dom";
import { RouteName, routes } from "../../routes";
import { authStore } from "../../store";
import { observer } from "mobx-react";

export const HomePage = observer(() => (
  <div className="w-1/2 h-60 shadow-xl rounded mx-auto mt-40 flex flex-col items-center justify-center text-center">
    <p className="text-2xl font-bold py-2">
      Hello! You are on the start page.{" "}
      {authStore.isAuthenticated ? (
        <span>
          Go to{" "}
          <Link
            to={routes[RouteName.LOGIN].path}
            className="decoration-1 text-indigo-400"
          >
            diary
          </Link>
        </span>
      ) : (
        <span>
          If you want to access private features, please{" "}
          <Link
            to={routes[RouteName.LOGIN].path}
            className="decoration-1 text-indigo-400"
          >
            log in
          </Link>{" "}
        </span>
      )}
    </p>
  </div>
));
