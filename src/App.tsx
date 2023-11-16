import { GlobalStyle } from "./styles/global-styles";
import LandingPage from "./views/Landing Page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}

export default App;
