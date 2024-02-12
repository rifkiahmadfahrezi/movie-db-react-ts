import { StateCreator, create } from "zustand";

interface Themes{
   theme : "dracula" | "night"
}

interface ThemeSlice {
   theme: Themes["theme"],
   updateTheme: () => void
}


const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
   theme: "dracula",
   updateTheme: () => {
      set(state => ({theme: state.theme == 'night' ? state.theme = 'dracula' : state.theme = 'night'}))
   }
})

export const useTheme = create<ThemeSlice>()((...a) => ({
   ...createThemeSlice(...a)
}))

