import '../../css/rootcss/home.css';
import SearchIcon from '@mui/icons-material/Search';
import Headericon from '../header/Headericon';



const Home = () => {

    return(
        <>            
            <div className="home-headerimg">
                <Headericon/>
                <center>
                    <div className='home-searchbar-mini'>
                        <div className='home-searchbar-row'>
                            <div><SearchIcon className='home-searchbar-icon1'/></div>
                            <div><input type='text' className='home-searchbar-input-text' placeholder="Hi, Where do want to go... "/></div>
                        </div>
                        
                        
                    </div>  
                    <div className='home-searchbar-max'></div>                  
                </center>                 
            </div> 
                      
        </>
    )
    
}

export default Home