import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Invantory from './components/Invantory/Invantory';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/inventory">
            <Invantory></Invantory>
          </Route>
          <Route exact path="/orders">
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
