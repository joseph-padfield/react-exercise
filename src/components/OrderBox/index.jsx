import AddRemoveButton from "../AddRemoveButton/index.jsx";

const OrderBox = () => {
    return (
        <div className={'orderBox'}>
            <div className={'orderTitle'}>Order</div>
            <div className={'itemRow'}><span>item.name</span>AddRemoveButton</div>
            <div>Sub-total</div>
            <div>Delivery</div>
            <div>Service</div>
            <div>Total</div>
            <div><button>Place Order</button></div>
        </div>
    )
}

export default OrderBox