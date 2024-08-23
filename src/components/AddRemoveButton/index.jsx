import './style.css'
import {useState} from "react";

const AddRemoveButton = () => {

    const [amount, setAmount] = useState(0)

    const handleClick = () => {
        let value = event.target.value
        value === '+' ? setAmount(amount+1)
            : amount === 0
                ? setAmount(amount)
                : setAmount(amount-1)
    }
    return (
        <div className={'flexContainer'}>
            <button className={'addRemoveButton plus'} value={'-'} onClick={handleClick}>+</button>
            <div className={'amount'}>{amount}</div>
            <button className={'addRemoveButton minus'} value={'+'} onClick={handleClick}>-</button>
        </div>
    )
}

export default AddRemoveButton