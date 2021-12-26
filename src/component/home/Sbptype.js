import '../../css/rootcss/sbptype.css';



const Sbptype = () => {
    // Search by type component
    return(<>
        <div className="sbp-main-layout">
            <div className='sbp-main-layout-seconddiv'>
                {/* <div className='sbp-main-coverlayout-scrollhelpcontainer'> */}
                    <div className='sbp-main-layout-thirddiv'>
                        <div className='sbp-main-layout-col'>
                            <div className='sbp-row-gap-property-type-box'>
                                <div className='spb-row-ptype'>
                                    Search by
                                    <br/>
                                    Property type
                                </div>
                            </div>
                            <div className='sbp-griditem-imge'>
                                <div className='sbp-grd-imge-item'>
                                    <div className='sbp-hcott-img'/>
                                </div>
                                <div className='sbp-title'>
                                    <h3 className='sbp-img-ref'>Holiday Cottages</h3>
                                </div>
                            </div>
                        </div>
                        <div className='sbp-main-layout-col'>
                            <div className='sbp-row-gap-property-gap-row'>
                                <div className='sbp-grd-imge-item'>
                                    <div className='sbp-hot-img'/>
                                </div>
                                <div className='sbp-title'>
                                    <h3 className='sbp-img-ref'>Hotels</h3>
                                </div>
                            </div>
                            <div className='sbp-row-gap-property-gap-row'>
                                <div className='sbp-grd-imge-item'>
                                    <div className='sbp-guesth-img'/>
                                </div>
                                <div className='sbp-title'>
                                    <h3 className='sbp-img-ref'>Guest House</h3>
                                </div>
                            </div>
                        </div>
                        <div className='sbp-main-layout-col'>
                            <div className='sbp-row-gap-property-gap-row'>
                                <div className='sbp-grd-imge-item'>
                                    <div className='sbp-selfcat-img'/>
                                </div>
                                <div className='sbp-title'>
                                    <h3 className='sbp-img-ref'>Self-Catering Accommodations</h3>
                                </div>
                            </div>
                            <div className='sbp-row-gap-property-gap-row'>
                                <div className='sbp-grd-imge-item'>
                                    <div className='sbp-rsrt-img'/>
                                </div>
                                <div className='sbp-title'>
                                    <h3 className='sbp-img-ref'>Resorts</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

        </div>
    </>)

}

export default Sbptype