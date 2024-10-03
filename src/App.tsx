import './view/css/fonts.css';
import './App.css';
import background from '../public/assets/images/background.jpg';

import { BrowserRouter } from 'react-router-dom';
import { Routings } from './controller/routes/Routing';
import { Footer } from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <Routings />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
