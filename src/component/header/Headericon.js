import logo from '../../resources/icon/LogoImg.jpg';
import '../../css/rootcss/headericon-btn.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import React from "react";
// import { Button } from '@mui/material';
// import IconButton from '@material-ui/core/IconButton';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const Headericon = () => {
    
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    //     const handleClick = (event) => {
    //         setAnchorEl(event.currentTarget);
    //     };
    //     const handleClose = () => {
    //         setAnchorEl(null);
    //     };




    //this is the main component in header
    return(
        <div className='headericon-whitespace'>
        <button className='header-button-logobtn' ><img src={logo} className='header-button-logobtn-image'/></button>
        
         <div className='icon-button-pading'>
         {/* <Button
               
               id="demo-positioned-button"
               aria-controls="demo-positioned-menu"
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}
               class="header-icon-button btn-secondary pull-right btn-sm"
               className='header-icon-button'
           
            >
               
               <IconButton color="inherit"  >
                   <MenuIcon fontSize="small"/>
                   <PersonOutlineIcon fontSize="small" /> 
                   </IconButton>
           </Button> */}
            
           
           {/* <Menu
               id="demo-positioned-menu"
               aria-labelledby="demo-positioned-button"
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
               }}
               transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
               }}
           >
               <MenuItem onClick={handleClose}>Log In</MenuItem><br/>
               <MenuItem onClick={handleClose}>Register</MenuItem>
               
           </Menu> */}
         </div>

               
        <div className='hotelier-pading'>
        <button className='header-button-hotelier'>Become a hotelier</button>
        </div>

         </div>
    )
}

export default Headericon