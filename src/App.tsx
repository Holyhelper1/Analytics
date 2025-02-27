// import './App.css'
// import '../css/style.css';

import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { MainFeatures } from "./Components/Main-features/Main-features";
import { PricingPlans } from "./Components/PricingPlans/PricingPlans";
import { RoadmapWrap } from "./Components/RoadWrap/RoadmapWrap";

function App() {
  return (
    <div>
      <Header />
      <MainFeatures/>
      <RoadmapWrap/>
      <PricingPlans/>
      <Footer/>
    </div>
  );
}

export default App;
