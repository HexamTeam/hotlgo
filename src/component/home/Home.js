import '../../css/rootcss/home.css';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import {SearchOutlined} from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
//import moment from 'moment';




const Home = () => {

    const { RangePicker } = DatePicker;

    // const dateFormat = 'YYYY/MM/DD';
    // const weekFormat = 'MM/DD';
    // const monthFormat = 'YYYY/MM';

    // const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    // const customFormat = value => `custom format: ${value.format(dateFormat)}`;

    // const customWeekStartEndFormat = value =>
    // `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
    // .endOf('week')
    // .format(weekFormat)}`;

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
                                            {/* <Space direction="vertical" size={12}> */}
                                                <RangePicker style={{display:"flex"}}/>
                                            {/* </Space> */}
                                            
                                        
                                        </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className='home-searchbar-max-thirddiv'>
                                            
                                <table>
                                    <tbody>
                                        <tr><div className='home-searchbar-location-text'>Guest Room</div></tr>
                                        <tr><div className='home-search-thirddiv-2ndtr'>2 adults . 1 room</div></tr>
                                        
                                    </tbody>
                                </table>
                                <div><SearchOutlined className='home-searchbar-icon2'/></div>
                            </div>
                        </div>

                    </div>                  
                </center>                 
            </div> 
                      
        </>
    )
    
}

export default Home