import '../../css/rootcss/footer.css'

const Footer = () => {
    return(
        <footer>
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
                    &copy;{new Date().getFullYear()} HotelGo. All rights reserved. Copyright (221-2030) - HotelGo.com <sup>TM</sup>
                </div>
                <div className="footer-social-media">
                    <span>English (GB)</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer