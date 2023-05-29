// AuthStore.ts
import { makeAutoObservable } from "mobx";
import api from "../api";

class AuthStore {
  isAuthenticated = api.isAuthenticated();
  username = api.getUsername();

  constructor() {
    makeAutoObservable(this);
  }

  login(username: string) {
    api.login(username);
    this.isAuthenticated = true;
    this.username = username;
  }

  logout() {
    api.logout();
    this.isAuthenticated = false;
    this.username = "";
  }
}

const authStore = new AuthStore();
export { authStore };
