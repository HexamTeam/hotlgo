import '../../css/rootcss/headerdiv.css';
import headerimg from '../../resources/icon/LogoImg.jpg'

const headerdiv = () => {
    return(
        <div className="headerdiv-main-whitespace">
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
                                    search bar
                                </div>
                                

                            </div>
                            <div className='headerdiv-main-whitespace-semidiv-three-2'>
                                <div className='headerdiv-main-whitespace-semidiv-three-2-s1'>become hotelier</div>
                            </div>
                            <div className='headerdiv-main-whitespace-semidiv-three-3'>
                                <div className='headerdiv-main-whitespace-semidiv-three-3-s1'></div>

                            </div>
                        </div>

                    </div>
                </div>
            </center>
            

            
        </div>
    )
}

export default headerdiv