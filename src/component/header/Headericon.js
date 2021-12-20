import logo from '../../resources/icon/LogoImg.jpg';
import { Button } from '@material-ui/core';
import '../../css/rootcss/headericon-btn.css';



const Headericon = () => {
    //this is the main component in header
    return(
        <div className='headericon-whitespace'>
        
        <Button className='header-button-logobtn' ><img src={logo} alter='' className='header-button-logobtn-image'/></Button>
       
        </div>
    )
}

export default Headericon