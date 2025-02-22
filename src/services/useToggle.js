import { create } from "zustand";

const useToggle = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));

export default useToggle;
