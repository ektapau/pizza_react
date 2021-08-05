import {Route} from 'react-router-dom'
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import BuidPizzaPage from './pages/BuidPizzaPage';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <NavbarComponent/>
      
      <br /><br />
      <div className="container">

        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/build" component={BuidPizzaPage} />
        <Route path="/cart" component={CartPage} />
      </div>
      <br />
      <br />

    <FooterComponent/>
      
    </div>
  );
}

export default App;
