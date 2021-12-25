import React from "react"

const Searchbarscroll = () => {
    
    const [searchVisible,setSearcVisible] = React.useState(false);

    React.useEffect(()=>{
        window.addEventListener("scroll",listenToScroll);
        return()=>{
            window.removeEventListener("scroll",listenToScroll);
        }
    });

    const listenToScroll = () =>{
        let heightToHide = 10;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(windowScroll > heightToHide){
            setSearcVisible(true);
        }else{
            setSearcVisible(false);
        }
    }

    return searchVisible;

}

export default Searchbarscroll