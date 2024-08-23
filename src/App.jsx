import './style.css'
import Nav from "./components/Nav/index.jsx";
import RestaurantHeading from "./components/RestaurantHeading/index.jsx";
import MenuItem from "./components/MenuItem/index.jsx";
import {useEffect, useState} from "react";
import TypeButtonContainer from "./components/TypeButtonContainer/index.jsx";


function App() {


    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants/3')
            .then((response) => {
                return response.json()
            }).then((data) => {
            setMenu(data.foodItems)
        })
    }, []);

  return (
      <>
          <Nav/>
          <RestaurantHeading/>
          <TypeButtonContainer menu={menu}/>
          <div className={'menuContainer'}>
              <MenuItem menu={menu}/>
          </div>

      </>
  )
}

export default App
