import Ribbon from './components/Ribbon';
import './App.css';
import Banner from './components/Banner';
import Content from './components/Content/Content';

import ProductSection from './components/Content2/ProductSection';
import Shopseries from './components/Shopseries/Shopseries';
import Shopproducts from './components/Shopproducts/Shopproducts';
import Design from './design/Design';
import End from './End/End';
function App() {
  return (
    <div className="App">
      <Ribbon />
      <Banner />
      <Content />
      <ProductSection />
      <Shopseries />
      <Shopproducts />
      <Design />
      <End />
    </div>
  );
}

export default App;
