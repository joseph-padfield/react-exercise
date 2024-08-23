import './style.css'
import {useState} from "react";

const TypeButtonContainer = ({menu}) => {

    const [activeIndex, setActiveIndex] = useState('')

    const reorder = (array) => {
        let filtered = array.filter(item => item !== 'Other')
        filtered.push('Other')
        return filtered
    }

    const handleClick = (index) => {
        console.log('index: ' + index)
        console.log('active index: ' + activeIndex)

        if (activeIndex === '') {
            setActiveIndex(index)
        }
            else if (activeIndex === index) {
                setActiveIndex('')
        }
            else {
            setActiveIndex(index)
        }

    }

    // const handleClick = (event) => {
    //     event.target.className === 'buttonElem ' ?
    //     event.target.className += 'active':
    //         event.target.className = 'buttonElem '
    // }

    let typearray = []

    menu.forEach(item => {
        if (!item.foodType) {
            if (!typearray.includes('Other')) {
                typearray.push('Other')
            }
        }
        else if (!typearray.includes(item.foodType)) {
            typearray.push(item.foodType)
        }
    })

    typearray = reorder(typearray)

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