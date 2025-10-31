// src/App.jsx
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Awaken from "./components/sections/Awaken";
import PulseOfTheCity from "./components/sections/PulseOfTheCity";
import EchoOfTheProblem from "./components/sections/EchoOfTheProblem";
import TheSolutionSpeaks from "./components/sections/TheSolutionSpeaks";
import TheMachineBehind from "./components/sections/TheMachineBehind";
import ImpactRipple from "./components/sections/ImpactRipple";
import VoicesOfChange from "./components/sections/VoicesOfChange";
import CallToActionFinal from "./components/sections/CallToActionFinal";
import EchoFade from "./components/sections/EchoFade";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="font-agrandir bg-[#F5F7F4] text-[#1A1A1A]">
        <Navbar />

        <Awaken />
        <PulseOfTheCity />
        <EchoOfTheProblem />
        <TheSolutionSpeaks />
        <TheMachineBehind />
        <ImpactRipple />
        <VoicesOfChange />
        <CallToActionFinal />
        <EchoFade />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
