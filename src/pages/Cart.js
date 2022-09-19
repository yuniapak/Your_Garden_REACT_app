import axios from 'axios'
import { useState } from 'react'

import MatchedPlants from '../components/MatchedPlants'
const Cart = (props) => {
  let bed1 = []

  const [created, setCreated] = useState(false)
  const [arrayOfPlants, setArrayOfPlants] = useState([])
  const cartElements = props.cartElements
  console.log(cartElements)
  //match plants to fit
  //working but matching in pairs!

  const fitPlants = () => {
    for (let i = 0; i < cartElements.length; i++) {
      for (let j = 0; j < cartElements.length; j++) {
        for (let e = 0; e < cartElements[j].fit.length; e++) {
          if (cartElements[i].Name === cartElements[j].fit[e]) {
            bed1.push(cartElements[i], cartElements[j])
            setArrayOfPlants(bed1)
            setCreated(true)
            console.log(bed1)
          }
        }
      }
    }
  }

  //create new cart onclick
  const createNewCart = async () => {
    axios.post(`http://localhost:3001/api/yourNewGarden`)
    console.log('new cart made')
  }
  //delete whole cart onclick
  const deleteCart = async () => {
    //const plantId = await cartElements(e.target.id)
    await axios
      .delete(`http://localhost:3001/api/yourNewGarden/${props.cartInUse}`)
      .then((res) => {
        console.log(res.status)
        window.location.reload(false)
        createNewCart()
      })
    //  console.log(cartElements)
  }
  const removeOnePlant = async (e) => {
    let plantId = e.target.id
    await axios.put(
      `http://localhost:3001/api/yourNewGarden/${props.cartInUse}/plant`,
      { plantId: plantId }
    )
    console.log(plantId)
    window.location.reload(false)
  }
  // cart.map((elem) => console.log(elem.Name))

  return (
    <div>
      <h2>Your plants:</h2>
      <div className="cartButtons">
        <button onClick={fitPlants}>Create Chart</button>
        <button type="submit" onClick={() => deleteCart()}>
          Clear Cart
        </button>
      </div>
      {cartElements.length !== 0 ? (
        <div className="Cart">
          {cartElements.map((elem) => (
            <div key={elem.Name} className="cartElem">
              <button
                id={elem._id}
                className="delete"
                type="submit"
                onClick={removeOnePlant}
              >
                X
              </button>
              <h3>{elem.Name}</h3>
              <img src={elem.image} alt={elem.Name} />
              <h4>Best planted with: {elem.fit}</h4>
            </div>
          ))}
        </div>
      ) : null}
      <MatchedPlants created={created} arrayOfPlants={arrayOfPlants} />
    </div>
  )
}
export default Cart
