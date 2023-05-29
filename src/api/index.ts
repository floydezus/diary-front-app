const api = {
  isAuthenticated: () => localStorage.getItem("isAuthenticated") === "true",
  getUsername: () => localStorage.getItem("username") || "",
  login: (username: string) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username);
  },
  logout: () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
  },
};

export default api;
