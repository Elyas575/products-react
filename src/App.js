import { Routes, Route } from 'react-router-dom';
import AllCardsPage from './pages/Home';
import CardDetailsPage from './pages/Details';
import  Navigation from './layout/Header/Navigation'
import ColorfulBar from './layout/ColorfulBar/ColorfulBar';
import WelcomeSection from './layout/WelcomeSection/WelcomeSection';
import Footer from './layout/Footer/Footer';
import "./pages//styles/variables.css"
import "./pages//styles/home.css"
import "./pages//styles/details.css"

function App() {

  return (
    <div>
      <Navigation />
      <ColorfulBar />
      <WelcomeSection />  
      <Routes>
        <Route path='/products-react' element={ <AllCardsPage />} />
        <Route path='/products-react/' element={ <AllCardsPage />} />
        <Route path="/product/:cardId" element={<CardDetailsPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
