import Header from './components/Header';
import OfferSlider from './components/OfferSlider';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomReviewsSlider from './components/BottomReviewsSlider';

import './App.css';
import './index.css';

function App() {
  return (
    <div className=''>
      <Header />
      <OfferSlider />
      <CallToAction />
      <BottomReviewsSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
