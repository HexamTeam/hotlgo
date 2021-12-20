import '../../css/rootcss/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return(
        <footer>
            <div className="footer-mobile-container">
                <div className="footer-mobile-left">
                    <div className="footer-lft-important-sec">
                        <div className="foo-glblimg"></div>
                        <div className="foo-importance">
                            <label className="foo-glbl-lbl1">Global exposure</label>
                            <label className="foo-glbl-lbl2">Maximise your potential - be seen by millions of guests.</label>
                        </div>
                    </div>
                    <div className="footer-lft-important-sec">
                        <div className="foo-higr-perfom"></div>
                        <div className="foo-importance">
                            <label className="foo-glbl-lbl1">High-performin listings</label>
                            <label className="foo-glbl-lbl2">Our Property Score ensures you'll stand out and get booked!</label>
                        </div>
                    </div>
                    <div className="footer-lft-important-sec">
                        <div className="foo-lst-aut-img"></div>
                        <div className="foo-importance">
                            <label className="foo-glbl-lbl1">Listings automation</label>
                            <label className="foo-glbl-lbl2">Effortlessly manage all properties and listings. Save time and cut admin.</label>
                        </div>
                    </div>
                </div>
                <div className="footer-mobile-middle">
                    <center><div className="foo-mobl-img"></div></center>
                </div>
                <div className="footer-mobile-right">
                    <div className="footer-lft-important-sec">
                        <div className="foo-importance-ri">
                            <label className="foo-glbl-lbl1">Calender sync</label>
                            <label className="foo-glbl-lbl2">No more double bookings or calender headaches.</label>
                        </div>
                        <div className="foo-cal-img"></div>
                    </div>
                    <div className="footer-lft-important-sec">
                        <div className="foo-importance-ri">
                            <label className="foo-glbl-lbl1">Bookings hub</label>
                            <label className="foo-glbl-lbl2">Access all your bookings quickly and easily.</label>
                        </div>
                        <div className="foo-booking-img"></div>
                    </div>
                    <div className="footer-lft-important-sec">
                        <div className="foo-importance-ri">
                            <label className="foo-glbl-lbl1">Dedicated team</label>
                            <label className="foo-glbl-lbl2">We work with thousands of vacation rental owners worldwide.</label>
                        </div>
                        <div className="foo-dedicated-img"></div>
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
                        <span className="foo-icons"><FacebookIcon/></span>
                        <span className="foo-icons"><TwitterIcon/></span>
                        <span className="foo-icons"><InstagramIcon/></span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer