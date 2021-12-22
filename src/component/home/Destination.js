import '../../css/rootcss/destination.css';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import LImg from '../../resources/Image/LondonImg.jpg';

const Destination = () => {

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
                    {/* grid itm 03 */}
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
                    {/* grid item 04 */}
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
                    {/* grid item 05 */}
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
                    {/* grid item 06 */}
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
                    {/* grid item 07 */}
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
                    {/* grid item08 */}
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
                </Content>
            </Layout>
        </div>
    </>);
}

export default Destination