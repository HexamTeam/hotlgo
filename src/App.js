import './App.css';
import Footer from './component/footer/Footer';
import Headericon from './component/header/Headericon';
import Chg from './component/home/Chg';
import Destination from './component/home/Destination';
import Home from './component/home/Home';
import TopDeal from './component/home/TopDeal';

function App() {
 
  return (
    <div className="App">
      {/* <TestSider/> */}
      <Headericon/>
      <Home/> 
      <Destination/>
      <Chg/>
      
      <TopDeal />


      <Footer/>
    </div>
  );
}

export default App;
