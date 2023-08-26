import NAV_BAR from "./components/NavBar";
import MainSection from "./components/mainSection";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import Lawyers from './components/lawyers'
import Whyus from './components/whyus'
import Footer from "./components/footer";
import Important from "./components/important";
import ContactUs from './components/contactUS'

function App() {
  return (
    <>
      <NAV_BAR />
      <MainSection />
      <AboutUs />
      <Whyus />
      <Services />
      <Lawyers />
      <Important />
      <ContactUs />
      <Footer />
    </>
  );
    
    
  
}

export default App;
