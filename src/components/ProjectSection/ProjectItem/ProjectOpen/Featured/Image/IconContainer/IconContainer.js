import React from 'react';
import {ReactComponent as CloseIcon} from "../../../../../../../assets/svg/icons/closeIcon.svg";
import {ReactComponent as ArrowNext} from "../../../../../../../assets/svg/icons/next.svg";
import {ReactComponent as ArrowPrev} from "../../../../../../../assets/svg/icons/next.svg";
const IconContainer = ({setImage, handleCloseProject}) => {
    return (
        <div className='iconContainer'>
            <div className='iconWrapper'>
                <div onClick={() => setImage('prev')} className='arrowPrev'>
                    <ArrowPrev />
                </div>
                <div onClick={() => setImage('next')} className='arrowNext'>
                    <ArrowNext />
                </div>
            </div>
            <div className='iconWrapper'>
                <div onClick={handleCloseProject} className='closeIcon'>
                    <CloseIcon />
                </div>
            </div>


        </div>
    )
}

export default IconContainer;