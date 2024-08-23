import './style.css'
import {useState} from "react";

const AddRemoveButton = () => {

    const [orderQuantity, setOrderQuantity] = useState(0)

    const handleClick = (event) => {
        let value = event.target.value
        value === '+' ? setOrderQuantity(orderQuantity+1)
            : orderQuantity === 0
                ? setOrderQuantity(orderQuantity)
                : setOrderQuantity(orderQuantity-1)
    }
    return (
        <div className={'flexContainer'}>
            <button className={'addRemoveButton minus'} value={'-'} onClick={handleClick}>-</button>
            <div className={'amount'}>{orderQuantity}</div>
            <button className={'addRemoveButton plus'} value={'+'} onClick={handleClick}>+</button>

        </div>
    )
}

export default AddRemoveButton