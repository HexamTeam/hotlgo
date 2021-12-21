import '../../css/rootcss/home.css';
// import SearchIcon from '@mui/icons-material/Search';
import Headericon from '../header/Headericon';
// import TextField from '@mui/material/TextField';
// import DateRangePicker from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Box from '@mui/material/Box';




const Home = () => {

    return(
        <>           
        
            <div className="home-headerimg">
                <Headericon/>
                <center>
                    <div className='home-searchbar-mini'>
                        <div className='home-searchbar-row'>
                            {/* <div><SearchIcon className='home-searchbar-icon1'/></div> */}
                            <div><input type='text' className='home-searchbar-input-text' placeholder="Hi, Where do want to go... "/></div>
                        </div>                       
                    </div>  
                    <div className='home-searchbar-max'>
                        <div className='home-searchbar-max-row'>
                            <div className='home-searchbar-max-firstdiv'>
                                <table>
                                    <tbody>
                                        <tr><div className='home-searchbar-location-text'>Location</div></tr>
                                        <tr><input type='text' className='home-searchbar-input-text1' placeholder="Hi, Where do want to go... "/></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr><div className='home-searchbar-location-text'>Check In</div></tr>
                                        <tr><input type='text' className='home-searchbar-input-text1' placeholder="Hi, Where do want to go... "/></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr><div className='home-searchbar-location-text'>Check Out</div></tr>
                                        <tr><input type='text' className='home-searchbar-input-text1' placeholder="Hi, Where do want to go... "/></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr><div className='home-searchbar-location-text'>Guest Room</div></tr>
                                        <tr><div>2 adults . 1 room</div></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>                  
                </center>                 
            </div> 
                      
        </>
    )
    
}

export default Home