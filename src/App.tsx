import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-styles";
import LandingPage from "./views/Landing Page";
import { darkTheme, lightTheme } from "./styles/Colors";
import { useSnapshot } from "valtio";
import { modeStore } from "./store/mode";

function App() {
  const { isDark } = useSnapshot(modeStore);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
