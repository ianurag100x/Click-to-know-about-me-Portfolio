import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(immer((set) => ({
    windows : WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX+1,

    openWindow: (windowKey, data) => set((state) => {
        const win =  state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.data = data ?? win.data;
        state.INITIAL_Z_INDEX++;
    }),

    closeWindow: (windowKey) => set((state) => {
        const win =  state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = 0;
        win.data = null;
    }),

    focusWindow: (windowKey) => set((state) => {
        const win =  state.windows[windowKey];
        win.zIndex = ++state.nextZIndex;
    })
})))

export default useWindowStore;