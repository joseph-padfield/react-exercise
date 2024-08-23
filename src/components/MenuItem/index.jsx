import './style.css'
import AddRemoveButton from "../AddRemoveButton/index.jsx";

const MenuItem = ({menu}) => {
    return (
        <div className={'menuItemContainer'}>
            {menu.map((item, index) => (
                <div key={index} className={'menuItem'}>
                    <div>
                        <p className={'itemName'}>{item.foodName}</p>
                        <div className={'infoFlex'}>
                            <p className={'info calories'}>{item.calories} calories</p>
                            {
                                !item.foodType ? '' : <p className={'info type'}>{item.foodType}</p>
                            }

                            {
                                !item.sideItem ? '':<p className={'info side'}>Side</p>
                            }
                        </div>
                    </div>
                    <div className={'flexRow'}>
                        <p className={'price'}>£{item.price.toFixed(2)}</p>
                        <AddRemoveButton/>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default MenuItem