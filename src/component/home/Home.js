import '../../css/rootcss/home.css';
import SearchIcon from '@mui/icons-material/Search';



const Home = () => {

    return(
        <>            
            <div className="home-headerimg">
                <center>
                    <div className='home-searchbar-mini'>
                        <SearchIcon className='home-searchbar-icon1'/>
                    </div>  
                    <div className='home-searchbar-max'></div>                  
                </center>                 
            </div> 
                      
        </>
    )
    
}

export default Home