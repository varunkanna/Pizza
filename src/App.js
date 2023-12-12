import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ItemSection from './components/Items/ItemSection';
import BannerPizza from './components/Items/BannerPizza';
import Page from './components/sectionTwo/Page';
import Info from './components/info/Info';
import Details from './components/details/Details';
import Menu from './components/menu/Menu';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Header />
      <Home />
      <ItemSection />
      <BannerPizza.BannerPizza />
      <Page />
      <BannerPizza.BannerPizza02 />
      <Info />
      <Details />
      <Menu />
      <Form />
    </div>
  );
}

export default App;
