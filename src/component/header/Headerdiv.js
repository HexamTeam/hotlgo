import '../../css/rootcss/headerdiv.css';
import headerimg from '../../resources/icon/LogoImg.jpg';
import 'antd/dist/antd.min.css';
import { Menu, Dropdown,Drawer,Input,Button} from 'antd';
import { UserOutlined, CloseOutlined ,MenuOutlined,SearchOutlined} from '@ant-design/icons';
import Searchbarscroll from '../shere/Searchbarscroll';
import React from 'react';


const Headerdiv = () => {

    const searchVisible = Searchbarscroll();
    const menu = (
        <Menu >
          <Menu.Item key="1" >
            Login in
          </Menu.Item>
          <Menu.Item key="2" >
            resiter
          </Menu.Item>
          
        </Menu>
      );

    //   const [visible, setVisible] = React.useState(false);
    const [visible,setVisible] = React.useState(false);
      

      const showDrawer = () => {
        setVisible(true);
        console.log(searchVisible);
      };

      const onClose = () => {
        setVisible(false);
      };

    //   React.useEffect(()=>{
    //         window.addEventListener("scroll",myFunction);
    //         return()=>{
    //             window.removeEventListener("scroll",myFunction);
    //         }
    //     })

    //window.addEventListener("scroll", myFunction);

    // function myFunction(el) {
        
    //     if(searchVisible===true){
    //         //document.getElementById("demo").style.color = "blue";
    //         console.log(true);
    //         el.className="headerdiv-main-whitespace-transparant";
    //     }else{
    //         console.log(false);
    //         el.className="headerdiv-main-whitespace";
    //     }
        
    // }
    let div_class = searchVisible? "headerdiv-main-whitespace" : "headerdiv-main-whitespace-transparant" ;


    return(
        <div className={div_class} >
            <center>
                <div className='headerdiv-main-whitespace-semidiv-one'>
                    <div className='headerdiv-main-whitespace-semidiv-one-space-maker'></div>
                    <div className='headerdiv-main-whitespace-semidiv-two'>
                        <div className='headerdiv-main-whitespace-semidiv-two-imagediv'>
                            <div className='header-image-div-cover'>
                                <a href='#' className='header-image-div-cover-a'>
                                    <img src={headerimg} alt="logo" className='header-image-div-cover-img'/>
                                </a>
                            </div>

                        </div>
                        <div className='headerdiv-main-whitespace-semidiv-three'>
                            <div className='headerdiv-main-whitespace-semidiv-three-1'>
                                <div className='headerdiv-main-whitespace-semidiv-three-1-s1'>
                                {searchVisible?<div className='searchbar-div'><SearchOutlined className='searchbar-div-so-icon'/><Input bordered={false} placeholder="Hi, Where do you want to go?" /></div>:<div></div>}
                                </div>
                                

                            </div>
                            <div className='headerdiv-main-whitespace-semidiv-three-2'>
                                <div className='headerdiv-main-whitespace-semidiv-three-2-s1'>
                                    <button className='headerdiv-main-whitespace-semidiv-three-2-s1-bah'>Become a hotelier</button>
                                </div>
                            </div>
                            <div className='headerdiv-main-whitespace-semidiv-three-3'>
                                <div className='headerdiv-main-whitespace-semidiv-three-3-s1'>
                                <Dropdown overlay={menu}>
                                    <button className='headerdiv-main-whitespace-semidiv-three-3-s1-btn'>
                                    <MenuOutlined className='headerdiv-main-whitespace-semidiv-three-3-s1header-menuicon'/>
                                    <UserOutlined className='headerdiv-main-whitespace-semidiv-three-3-s1header-avatraicon' />
                                    </button> 
                                </Dropdown>
                                </div>

                            </div>
                            <div>
                                <div className='headerdiv-menuicon-button'>
                                    <Button type="primary" onClick={showDrawer} className='headerdiv-menuicon-button'>
                                    <MenuOutlined onClick={showDrawer} className='headerdiv-menuicon-icon'/>
                                    </Button>
                                    <Drawer  width="80%" placement="right" onClose={onClose} visible={visible} closable={false} >
                                    <div className='headerdiv-closeoutline-padding'>
                                        <CloseOutlined height="30px" onClick={onClose} className='headerdiv-closeoutlined'/>
                                    </div>
                                    
                                    
                                    <br/>
                                    <div className='headerdiv-signin-btn-transperant-space'></div>
                                    <div  className='headerdiv-signin-btn'>    
                                        <div className='headerdiv-signin-btn-transperant-space'></div>                                
                                        <button className='headerdiv-sign-btn' >Sign in</button>                                 
                                        <button className='headerdiv-signup-btn'>Sign up</button>
                                        </div>
                                    </Drawer>                              
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
            </center>
            

            
        </div>
    )
}

export default Headerdiv