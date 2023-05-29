import { Route, Routes } from "react-router-dom";

import { Layout, LoginPage, DiaryPage, ErrorPage, HomePage } from "./pages";

import { RequireAuth } from "./components";
import { RouteName, routes } from "./routes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes[RouteName.HOME].path} element={<HomePage />} />
        <Route path={routes[RouteName.LOGIN].path} element={<LoginPage />} />
        <Route
          path={routes[RouteName.DIARY].path}
          element={
            <RequireAuth>
              <DiaryPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
