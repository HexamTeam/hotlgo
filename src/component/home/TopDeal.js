import "../../css/rootcss/topdeal.css"
import {CaretRightOutlined} from '@ant-design/icons';


const TopDeal = () => {
    return(<section className="tp-sec">
        <div className="tpdeal-main-dev">
            <div className="tpdeal-page-heading">Today's top deal</div>
            <div className="tpdeal-page-col-dev">
                <div className="tpdeal-col-dev-col1">
                    <div className="tpdeal-col-img-col1">
                        
                        <div className="tp-img-citybreak">
                        {/* <button className="tp-book-nw-batn">Book Now {'>'}</button> */}
                        <div className="tp-book-nw-batn">
                            Book Now
                            <span><CaretRightOutlined /></span>
                        </div>
                        </div>
                    </div>
                    <div className="topdeal-content">
                        <div className="topdeal-title">
                            <h3>City Break</h3>
                        </div>
                        <div className="topdeal-paragrph">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet sed diam nonummy nibh euismod tincidunt ut laoreet
                            <span className="topdeal-more-info-link">More...</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tpdeal-col-dev-col1">
                    <div className="tpdeal-col-img-col1">
                        <div className="tp-img-beach">
                            <div className="tp-book-nw-batn">
                                Book Now
                                <span><CaretRightOutlined /></span>
                            </div>
                        </div>
                    </div>
                    <div className="topdeal-content">
                        <div className="topdeal-title">
                            <h3>Beach Holiday</h3>
                        </div>
                        <div className="topdeal-paragrph">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet sed diam nonummy nibh euismod tincidunt ut laoreet
                            <span className="topdeal-more-info-link">More...</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tpdeal-col-dev-col1">
                    <div className="tpdeal-col-img-col1">
                        <div className="tp-img-countryside">
                            <div className="tp-book-nw-batn">
                                Book Now
                                <span><CaretRightOutlined /></span>
                            </div>
                        </div>
                    </div>
                    <div className="topdeal-content">
                        <div className="topdeal-title">
                            <h3>Countryside Break</h3>
                        </div>
                        <div className="topdeal-paragrph">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet sed diam nonummy nibh euismod tincidunt ut laoreet
                            <span className="topdeal-more-info-link">More...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default TopDeal