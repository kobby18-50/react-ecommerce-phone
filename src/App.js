import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Details from './components/Details';
import Footer from './components/Footer';
import Modal from './components/Modal';


function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route  component={Default} />
      </Switch>
      <Modal/>
      <Footer/>
    </div>

  );
}

export default App;
