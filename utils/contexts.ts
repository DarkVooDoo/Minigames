import { createContext } from "react";

export const ThemeContext = createContext<[boolean, ()=>void]>([false, ()=>{}])