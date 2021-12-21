import '../../css/rootcss/home.css';
// import SearchIcon from '@mui/icons-material/Search';

// import TextField from '@mui/material/TextField';
// import DateRangePicker from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Box from '@mui/material/Box';
import {SearchOutlined} from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import moment from 'moment';




const Home = () => {

    const { RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';
    const monthFormat = 'YYYY/MM';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const customFormat = value => `custom format: ${value.format(dateFormat)}`;

    const customWeekStartEndFormat = value =>
    `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
    .endOf('week')
    .format(weekFormat)}`;

    return(
        <>           
        
            <div className="home-headerimg">
            {/* <Headericon/> */}
                <center>
                    <div className='home-searchbar-mini'>
                        <div className='home-searchbar-row'>
                            <div><SearchOutlined className='home-searchbar-icon1'/></div>
                            <div><input type='text' className='home-searchbar-input-text' placeholder="Hi, Where do want to go... "/></div>
                        </div>                       
                    </div>  
                    <div className='home-searchbar-max'>
                        <div className='home-searchbar-max-row'>
                            <div className='home-searchbar-max-firstdiv'>
                                <table>
                                    <tbody>
                                        <tr><div className='home-searchbar-location-text'>Location</div></tr>
                                        <tr><input type='text' className='home-searchbar-input-text1' placeholder="Where do want to go... "/></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='home-searchbar-max-secondiv'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='home-searchbar-location-text'>Check In</div>
                                            </td>
                                            <td>
                                                <div className='home-searchbar-location-text'>Check Out</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                            {/* <RangePicker
                                            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                                            format={dateFormat}
                                            /> */}
                                            <RangePicker style={{display:"flex"}}/>
                                        
                                        </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className='home-searchbar-max-thirddiv'>
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