import { Tabs } from 'antd';
import '../../css/rootcss/chg.css';
import ArrivalImg from '../../resources/Image/ContactlessArrivalImg.png'

const Chg = () => {

     const { TabPane } = Tabs;
     // contactless arrival / House keeping / Grab N Go
     return(<>
          <Tabs defaultActiveKey="1" size="large" centered>
               <TabPane tab="Contactless Arrival" key="1">
                    <center>
                    <div className='tabpane-div-main'>
                         <div className='tabpanr-image-div'>
                              <img src={ArrivalImg} className='tab-pane-image-container'/>
                         </div>
                         <div className='tabpane-div-text'>
                              <label className='tabpane-div-text-header'>Enhance the Way You Stay</label>
                              <div className='tabpane-maindiv-text-content'>
                                   <label className='tabpane-div-text-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                   </label>
                              </div>
                              

                         </div>
                    </div>
                    </center>
                    
               </TabPane>
               <TabPane tab="Housekeeping" key="2">
                    <center>
                         <div className='tabpane-div-main'>
                              <div className='tabpanr-image-div'>
                                   <img src={ArrivalImg} className='tab-pane-image-container'/>
                              </div>
                              <div className='tabpane-div-text'>
                                        <label className='tabpane-div-text-header'>Grab N Go</label>
                                   <div className='tabpane-maindiv-text-content'>
                                        <label className='tabpane-div-text-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </label>
                                   </div>
                                   
                              </div>
                         </div>
                    </center>
               </TabPane>
               <TabPane tab="Grab N Go" key="3">
                    <center>
                         <div className='tabpane-div-main'>
                              <div className='tabpanr-image-div'>
                                   <img src={ArrivalImg} className='tab-pane-image-container'/>
                              </div>
                              <div className='tabpane-div-text'>
                                        <label className='tabpane-div-text-header'>Housekeeping</label>
                                   <div className='tabpane-maindiv-text-content'>
                                        <label className='tabpane-div-text-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </label>
                                   </div>
                                   
                              </div>
                         </div>
                    </center>
               
               </TabPane>
          </Tabs>
     </>);
}

export default Chg