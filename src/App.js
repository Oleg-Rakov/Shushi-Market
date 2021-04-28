import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import ItemContainer from './components/item/ItemContainer';
import About from './pages/about/about';
import ContactsPage from './pages/contacts-page/ContactsPage';
import Delivery from './pages/delivery/Delivery';
import MainPage from './pages/MainPage';
import Menu from './pages/menu/Menu';
import PageNotFound from './pages/PageNotFound.jsx';
import Promotions from './pages/promotions/Promotions';
import Reviews from './pages/reviews/Reviews';
import Vacancy from './pages/vacancy/Vacancy';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Header />
          <Switch>
            <Route path="/404" render={() => <PageNotFound />} />
            <Route exact path="/" render={() => <MainPage />} />
            <Route path="/item/:id" render={() => <ItemContainer />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/menu" render={() => <Menu />} />
            <Route path="/delivery" render={() => <Delivery />} />
            <Route path="/vacancy" render={() => <Vacancy />} />
            <Route path="/reviews" render={() => <Reviews />} />
            <Route path="/promotions" render={() => <Promotions />} />
            <Route path="/contacts" render={() => <ContactsPage />} />
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
          <Footer />
        </Route>
      </Switch>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
