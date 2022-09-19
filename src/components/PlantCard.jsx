import React from 'react'
import{Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const PlantCard = (props) =>{

    let searchResults = props.searchResults
    const cartId = props.cartInUse

//update Cart onClick

const getPlant= async(selectedPlant) =>{
    const plant = await axios.get(`http://localhost:3001/api/plant/${selectedPlant}`)
return (plant.data._id)
}

const addToCart = async (e) => { 
    const plantId = await getPlant(e.target.id) 
    const res = await axios.put(`http://localhost:3001/api/yourNewGarden/${cartId}`,{plant: plantId})
    console.log(plantId)
// '    window.location.reload(false)'
}

 let navigate = useNavigate()
const showPlant = (plant) => {
navigate(`${plant.Name}`,{state: {plant: plant}})
}
//Maping through all elements before searched
    {
        if (props.searchQuery == '' || props.searched != true) {
          return (
            <div className='allPlants'>
              {props.allPlants.map((plant) => (
                <div key={plant.Name} className='plant'>
                  <img src={plant.image} alt={plant.Name} />
                  <h3>{plant.Name}</h3>
                  <div className='addMorebutton'>
                  <button id={plant.Name} type='submit' onClick={addToCart}>Add</button>
                  <button onClick={()=> showPlant(plant)}>More Information</button>  
                  </div>           
                </div>
              ))}
            </div>
          )
        }
      }


//Mapping through Search elements
    return(
        <div>
            {
            searchResults.map((plant)=>(
            <div key = {plant.Name} onClick={props.onClick} className='plant'>
            <img src={plant.image} alt={plant.Name}/>
            <h3>{plant.Name}</h3>
            <div className='addMorebutton'>
        
            <button id={plant.Name} type='submit' onClick={addToCart}>Add</button>
            <button onClick={()=> showPlant(plant)}>More Information</button>    
            
            </div>
            </div>
            ))
            }

        </div>
    )
}

export default PlantCard