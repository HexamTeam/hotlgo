import logo from '../../resources/icon/LogoImg.jpg';
import { Button } from '@material-ui/core';
import '../../css/rootcss/headericon-btn.css';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const Headericon = () => {
    //this is the main component in header
    return(
        <div>
        
        <Button className='header-button-logobtn' ><img src={logo} className='header-button-logobtn-image'/></Button>
       
        </div>
    )
}

export default Headericon