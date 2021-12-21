import logo from '../../resources/icon/LogoImg.jpg';
import '../../css/rootcss/headericon-btn.css';
import React from "react";
import {MenuOutlined} from '@ant-design/icons';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';


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

        </div>
        </div>
    )
}

export default Headericon