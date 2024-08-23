import './style.css'
import Nav from "./components/Nav/index.jsx";
import RestaurantHeading from "./components/RestaurantHeading/index.jsx";
import MenuItem from "./components/MenuItem/index.jsx";
import {useEffect, useState} from "react";
import TypeButtonContainer from "./components/TypeButtonContainer/index.jsx";


function App() {

    const [menu, setMenu] = useState([])
    const [activeIndex, setActiveIndex] = useState('')

    useEffect(() => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants/3')
            .then((response) => {
                return response.json()
            }).then((data) => {
            setMenu(data.foodItems)
        })
    }, []);

    const handleClick = (index) => {
        // console.log('index: ' + index)
        // console.log('active index: ' + activeIndex)

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

    const reorder = (array) => {
        let filtered = array.filter(item => item !== 'Other')
        filtered.push('Other')
        return filtered
    }

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
      <>
          <Nav/>
          <RestaurantHeading/>
          <TypeButtonContainer typearray={typearray} handleClick={handleClick} activeIndex={activeIndex}/>
          <div className={'menuContainer'}>
              <MenuItem menu={menu} typearray={typearray} activeIndex={activeIndex} />
          </div>

      </>
  )
}

export default App
