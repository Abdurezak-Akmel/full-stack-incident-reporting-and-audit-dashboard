export const storage = {
  setToken: (token: string) => localStorage.setItem("token", token),
  getToken: () => localStorage.getItem("token"),
  clear: () => localStorage.clear(),
};
