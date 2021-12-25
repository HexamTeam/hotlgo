import '../../css/rootcss/destination.css';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import LImg from "../../resources/Image/DestinationComp/LondonImg.jpg";
import NwImg from "../../resources/Image/DestinationComp/NewyorkImg.jpg";
import RmImg from "../../resources/Image/DestinationComp/RomeImg.jpg";
import RmImg1 from "../../resources/Image/DestinationComp/RomeImg2.jpg";
import BrlnImg from "../../resources/Image/DestinationComp/BerlinImg.jpg";
import VienaImg from "../../resources/Image/DestinationComp/ViennaImg.jpg";
import BarclonaImg from "../../resources/Image/DestinationComp/BarcelonaImg.jpg";
import mdridImg from "../../resources/Image/DestinationComp/MadridImg.jpg";

const Destination = () => {

    //reverting will revert
    const { Header,Content} = Layout;
    return(<>
        <div className='destination-body'>
            <Layout >
                <Header className='destination-antlayout-header'>
                    Find Your Next Destination
                </Header>
                <Content className='destination-antlayout-content'>
                    {/* grid item 01 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                            <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={LImg} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                            <h3>London</h3>
                            <span>6.5 hour drive</span>
                        </div>
                    </div>
                    {/* grid item 02 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                        <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={NwImg} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                        <h3>New York</h3>
                            <span>6.5 hour drive</span>
                        </div>
                    </div>
                    {/* grid itm 03 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                        <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={RmImg} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                            <h3>Rome</h3>
                            <span>6.5 hour drive</span>
                        </div>
                    </div>
                    {/* grid item 04 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                        <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={RmImg1} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                            <h3>Rome</h3>
                            <span>6.5 hour drive</span>
                        </div>
                    </div>
                    {/* grid item 05 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                        <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={BrlnImg} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                            <h3>Berlin</h3>
                            <span>6.5 hour drive</span> 
                        </div>
                    </div>
                    {/* grid item 06 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                        <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={VienaImg} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                            <h3>Vienna</h3>
                            <span>6.5 hour drive</span>
                        </div>
                    </div>
                    {/* grid item 07 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                        <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={BarclonaImg} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                            <h3>Barcelona</h3>
                            <span>6.5 hour drive</span>
                        </div>
                    </div>
                    {/* grid item08 */}
                    <div className='destination-antlayout-content-grid-item'>
                        <div className='destination-antlayout-content-grid-item-img'>
                        <div className='destination-div1-img1'>
                                <div className='destination-div2-img1'>
                                    <div className='destination-div3-img1'>
                                        <img src={mdridImg} alt="london" className='destination-div3-img1-tag'/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='destination-antlayout-content-grid-item-content'>
                            <h3>Madrid</h3>
                            <span>6.5 hour drive</span>
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    </>);
}

export default Destination