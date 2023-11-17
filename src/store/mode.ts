import { proxy } from "valtio";

export const modeStore = proxy<{
  isDark: boolean;
}>({
  isDark: true,
});
