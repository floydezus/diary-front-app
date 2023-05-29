export enum RouteName {
  HOME,
  LOGIN,
  DIARY,
}
//  TODO All routes
export const routes: Record<RouteName, { path: string; exact: boolean }> = {
  [RouteName.HOME]: {
    path: "/",
    exact: true,
  },
  [RouteName.LOGIN]: { path: "/login", exact: true },
  [RouteName.DIARY]: {
    path: "/diary",
    exact: true,
  },
};
