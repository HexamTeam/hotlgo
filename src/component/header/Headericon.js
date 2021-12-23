import logo from '../../resources/icon/LogoImg.jpg';
import '../../css/rootcss/headericon-btn.css';
// import React from "react";
import {MenuOutlined} from '@ant-design/icons';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import { Menu, Dropdown,Drawer, Button} from 'antd';
import { UserOutlined,CloseOutlined  } from '@ant-design/icons';
import React, { useState } from 'react';


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

      const [visible, setVisible] = useState(false);

      const showDrawer = () => {
        setVisible(true);
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
     
      <Drawer  width="40%" placement="right" onClose={onClose} visible={visible} closable={false} >
        
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