import "./App.css";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import AboutEvent from "./pages/About Event/AboutEvent";
import EventRewards from "./pages/Event Rewards/EventRewards";
import HowToParticipate from "./pages/How To Participate/HowToParticipate";
import VikendiWonderland from "./pages/Vikendi Wonderland/VikendiWonderland";

function App() {
  return (
    <>
      <Header />
      <VikendiWonderland />
      <AboutEvent />
      <EventRewards />
      <HowToParticipate />
      <Footer />
    </>
  );
}

export default App;
