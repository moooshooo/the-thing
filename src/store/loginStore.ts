import { create } from "zustand";

export interface AppState {
  view: "home" | "login";
}

export interface Actions {
  setView: (view: AppState["view"]) => void;
}

const loginStore = create<AppState & Actions>((set) => ({
  view: "login",
  setView: (view: AppState["view"]) => set({ view }),
}));

export default loginStore;