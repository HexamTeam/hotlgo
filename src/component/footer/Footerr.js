import '../../css/rootcss/footer.css'
import {FacebookOutlined} from '@ant-design/icons'; 
import {TwitterOutlined} from '@ant-design/icons';
import {InstagramOutlined} from '@ant-design/icons';

import PhoneImg from "../../resources/Image/PhoneImg.png";
import GlblIcon from "../../resources/icon/GlobalExposureImg.png";
import HighPrfrm from "../../resources/icon/High-PerformingListings.png";
import LstAtoIcon from "../../resources/icon/ListingsAutomationImg.png";
import CalIcon from "../../resources/icon/CalenderSyncImg.png";
import BokkIcon from "../../resources/icon/BookingHubImg.png";
import DedictedIcon from "../../resources/icon/DedicatedTeamImg.png";
import QrIcon from "../../resources/icon/QR.PNG";

const Footerr = () => {
    return(
        <footer className="foo-main">
            <div className="footer-mobile-container">
                <div className="footer-mobile-left">
                    <div className="footer-lft-important-seco">
                        {/* <div className="foo-glblimg"></div> */}
                        <img src={GlblIcon} className="foo-glblimg"/>
                        <div className="foo-importance">
                            <label className="foo-glbl-lbl1">Global exposure</label>
                            <label className="foo-glbl-lbl2">Maximise your potential - be seen by millions of guests.</label>
                        </div>
                    </div>
                    <div className="footer-lft-important-seco">
                        {/* <div className="foo-higr-perfom"></div> */}
                        <img src={HighPrfrm} className="foo-higr-perfom"/>
                        <div className="foo-importance">
                            <label className="foo-glbl-lbl1">High-performin listings</label>
                            <label className="foo-glbl-lbl2">Our Property Score ensures you'll stand out and get booked!</label>
                        </div>
                    </div>
                    <div className="footer-lft-important-seco">
                        {/* <div className="foo-lst-aut-img"></div> */}
                        <img src={LstAtoIcon} className="foo-lst-aut-img"/>
                        <div className="foo-importance">
                            <label className="foo-glbl-lbl1">Listings automation</label>
                            <label className="foo-glbl-lbl2">Effortlessly manage all properties and listings. Save time and cut admin.</label>
                        </div>
                    </div>
                </div>
                <div className="footer-mobile-middle">
                    {/* <center><div className="foo-mobl-img"></div></center> */}
                    <img src={PhoneImg} className="foo-mobl-img"/>
                </div>
                <div className="footer-mobile-right">
                    <div className="footer-lft-important-sec">
                        <div className="foo-importance-ri">
                            <label className="foo-glbl-lbl1">Calender sync</label>
                            <label className="foo-glbl-lbl2">No more double bookings or calender headaches.</label>
                        </div>
                        {/* <div className="foo-cal-img"></div> */}
                        <img src={CalIcon} className="foo-cal-img"/>
                    </div>
                    <div className="footer-lft-important-sec2">
                        <div className="foo-importance-ri2">
                            <label className="foo-glbl-lbl1">Bookings hub</label>
                            <label className="foo-glbl-lbl2">Access all your bookings quickly and easily.</label>
                        </div>
                        {/* <div className="foo-booking-img"></div> */}
                        <img src={BokkIcon} className="foo-booking-img"/>
                    </div>
                    <div className="footer-lft-important-sec">
                        <div className="foo-importance-ri">
                            <label className="foo-glbl-lbl1">Dedicated team</label>
                            <label className="foo-glbl-lbl2">We work with thousands of vacation rental owners worldwide.</label>
                        </div>
                        {/* <div className="foo-dedicated-img"></div> */}
                        <img src={DedictedIcon} className="foo-dedicated-img"/>
                    </div>
                    <div className="foo-batn-sect">
                        <div className="foo-get-app-btn">
                        <div className="foo-batn-qr">
                            <div className="foo-qr-box">
                                <div className="foo-qr-brdr"></div>
                                <img src={QrIcon} className="foo-qr-img"/>
                            </div>
                        </div>
                            <button className="foo-app-btn-back">
                                <div className="foo-getthe-app">
                                    Get the App
                                </div>
                            </button>
                            
                        </div>
                        <div className="foo-dwnld-btn">
                            <button className="foo-appstore-batn"></button>
                            <button className="foo-gplay-batn"></button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer-callout-container">
                <h1 className="footer-callout-container-title">
                Travel More, Travel Better
                </h1>
                <p className="footer-callout-container-p">
                Sign up for travel ideas and tips in your mailbox
                </p>
                <div className="footer-class-sec">
                    <form>
                        <input className="footer-input-form" type="email" placeholder="Your email address"/>
                        <button type="button" className="footer-button-form">Sign Up</button>
                    </form>
                </div>
            </div>

            <div className="footer-middle-container">
                <div className="footer-middle-con-row">
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">ABOUT</p>
                        <p className="footer-col-footlink" href="#">How HotelGo works</p>
                        <p className="footer-col-footlink" href="#">Newsroom</p>
                        <p className="footer-col-footlink" href="#">Investors</p>
                        <p className="footer-col-footlink" href="#">HotelGo Plus</p>
                        <p className="footer-col-footlink" href="#">HotelGo Luxe</p>
                        <p className="footer-col-footlink" href="#">Hotel Tonight</p>
                        <p className="footer-col-footlink" href="#">HotelGo for Work</p>
                        <p className="footer-col-footlink" href="#">Made possible by hosts</p>
                        <p className="footer-col-footlink" href="#">Careers</p>
                        <p className="footer-col-footlink" href="#">Founders' Letter</p>
                    </div>
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">COMMUNITY</p>
                        <p className="footer-col-footlink" href="#">Diversity and Belonging</p>
                        <p className="footer-col-footlink" href="#">Accessibility</p>
                        <p className="footer-col-footlink" href="#">HotelGo Associates</p>
                        <p className="footer-col-footlink" href="#">Frontline Stays</p>
                        <p className="footer-col-footlink" href="#">Guest Referrals</p>
                        <p className="footer-col-footlink" href="#">HotelGo.com</p>
                    </div>
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">HOST</p>
                        <p className="footer-col-footlink" href="#">Host your home</p>
                        <p className="footer-col-footlink" href="#">Host an Online Experience</p>
                        <p className="footer-col-footlink" href="#">Host an Experience</p>
                        <p className="footer-col-footlink" href="#">Responsible hosting</p>
                        <p className="footer-col-footlink" href="#">Resourse Center</p>
                        <p className="footer-col-footlink" href="#">Community Center</p>
                    </div>
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">SUPPORT</p>
                        <p className="footer-col-footlink" href="#">Our COVID-19 Response</p>
                        <p className="footer-col-footlink" href="#">Help Center</p>
                        <p className="footer-col-footlink" href="#">Cancellation options</p>
                        <p className="footer-col-footlink" href="#">Neighbourhood Support</p>
                        <p className="footer-col-footlink" href="#">Trust and Safety</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-container">
                <div className="footer-copyright">
                    &copy;{new Date().getFullYear()} HotelGo. All rights reserved. Copyright (221-2030) - HotelGo.com <sup className="foo-supp">TM</sup>
                </div>
                <div className="footer-social-media">
                    <span>English (GB)</span>
                    <span className="footer-slm-icon">
                        <span className="foo-icons"><FacebookOutlined /></span>
                        <span className="foo-icons"><TwitterOutlined /></span>
                        <span className="foo-icons"><InstagramOutlined /></span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footerr