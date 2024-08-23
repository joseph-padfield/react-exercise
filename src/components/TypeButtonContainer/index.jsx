import './style.css'

const reorder = (array) => {
    let filtered = array.filter(item => item !== 'Other')
    filtered.push('Other')
    return filtered
}

const TypeButtonContainer = ({menu}) => {

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
    console.log(typearray)
    typearray = reorder(typearray)
    console.log(typearray)
    return (
        <div className={'menuButtonContainer'}>
            {
                typearray.map((item, index) => (
                    <div key={index}>
                        <button className={'buttonElem'}>{item}</button>
                    </div>
                )
                )
            }
        </div>
    )
}

export default TypeButtonContainer