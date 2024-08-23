import './style.css'
import {useState} from "react";

const TypeButtonContainer = ({typearray, handleClick, activeIndex}) => {

    return (
        <div className={'menuButtonContainer'}>
            {
                typearray.map((item, index) => (
                        <div key={index}
                             className={`buttonElem  ${activeIndex === index ?
                             'active' :
                             ''}`}
                               onClick={() => handleClick(index)}>
                            {item}
                        </div>
                )
                )
            }
        </div>
    )
}

export default TypeButtonContainer