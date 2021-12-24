import './App.css';
import Footerr from './component/footer/Footerr';
import Headericon from './component/header/Headericon';
import Chg from './component/home/Chg';
import Destination from './component/home/Destination';
import Home from './component/home/Home';
import Sbptype from './component/home/Sbptype';
import TopDeal from './component/home/TopDeal';
import '../src/css/rootcss/mainheader.css';
import Headerdiv from './component/header/Headerdiv';



function App() {

  
 
  return (
    <div className="App">
      {/* <TestSider/> */}
      
        
        {/* <Headerdiv/> */}
        <Headericon/>
        
      
        {/* className='mainheader-ant-header-landpage' */}
      
        <Home/> 
        <Destination/>
        <Sbptype/>
        <Chg/>      
        <TopDeal />
      
        
        
        <Footerr/>
        
        
    
      
      


      
    </div>
  );
}

export default App;
