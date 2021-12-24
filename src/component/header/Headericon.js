import logo from '../../resources/icon/LogoImg.jpg';
import '../../css/rootcss/headericon-btn.css';
// import React from "react";
import {MenuOutlined} from '@ant-design/icons';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import { Menu, Dropdown,Drawer, Button} from 'antd';
import { UserOutlined,CloseOutlined  } from '@ant-design/icons';
import  React from 'react';
import Searchbarscroll from '../shere/Searchbarscroll';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



const Headericon = () => {
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


       const searchVisible = Searchbarscroll();
    //         const [search_hide,setSearch_hide] = React.useState(false);

    // React.useEffect(()=>{
    //     window.addEventListener("scroll", listenToScroll);
    //     return () => 
    //         window.removeEventListener("scroll", listenToScroll); 
    //     });

    //     const listenToScroll = () => {  
    //         let heightToHideFrom = 10;
    //         const winScroll = document.body.scrollTop || 
    //             document.documentElement.scrollTop;
               
    //         if (winScroll > heightToHideFrom) { 
    //            search_hide &&      // to limit setting state only the first time         
    //              setSearch_hide(true); 
    //              console.log(search_hide);
    //         } else {
    //              setSearch_hide(false);
    //              console.log(search_hide);
    //         }  
    //       };

       

      const [visible, setVisible] = React.useState(false);

      const showDrawer = () => {
        setVisible(true);
        console.log(searchVisible);
      };

      const onClose = () => {
        setVisible(false);
      };

    
    return(
        <div> 
        
        <div className='headericon-whitespace header-box'>
        <button className='header-button-logobtn' ><img src={logo} className='header-button-logobtn-image'/></button>    
        <div className='icon-button-pading'> 
        </div>

        {searchVisible?<div className='searchbar-div'><SearchOutlined/><Input bordered={false} placeholder="Hi, Where do you want to go?" /></div>:<div></div>}

        

        <div className='hotelier-pading'>
        <button className='header-button-hotelier'>Become a hotelier</button>
        </div>

        <div className='header-avatraicon-btn-padding' >
        <Dropdown overlay={menu}>
            <button className='header-avatraicon-btn'>
            <MenuOutlined className='header-menuicon'/>
            <UserOutlined className='header-avatraicon' /></button> 
        </Dropdown>        
        </div>


        <div className='header-menuicon-button'>
        
        {/* <Button type="primary" onClick={showDrawer}> */}
        <MenuOutlined onClick={showDrawer}/>
        {/* </Button> */}
     
      <Drawer  width="80%" placement="right" onClose={onClose} visible={visible} closable={false} >
        
      <CloseOutlined height="30px" onClick={onClose} className='header-closeoutlined '/><br/>
      <div  className='header-signin-btn'>

       
        <button className='header-sign-btn' >Sign in</button>
       
       
        <button className='header-signup-btn'>Sign up</button>
        
        </div>
      </Drawer>
        
    
        </div>
        </div>
        </div>

        
    )
}

export default Headericon