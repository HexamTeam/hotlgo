//import '../../resources/icon/Logoiimg.jpg'
import { Button } from '@material-ui/core';
import '../../css/rootcss/headericon-btn.css';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const Headericon = () => {
    //this is the main component in header
    return(
        <div>
        <button className='header-button-btn'>click</button>
        <Button>hj</Button>
        <IconButton color="primary">
  <WhatshotIcon fontSize="large" />
</IconButton>

        </div>
    )
}

export default Headericon