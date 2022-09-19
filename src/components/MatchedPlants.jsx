const MatchedPlants = ({created, arrayOfPlants}) =>{
return(
    <div >
       {created ? (
            <div>
                <h1>Matched:</h1>
                <div className='matched'>
            {arrayOfPlants.map((plant) => (
            <div key={plant.Name} className="matchedPlant">
            <h1>{plant.Name}</h1>
            <img src = {plant.image}/>
         
            </div>
                ))}
                   </div>
                </div>
        ) : null
        }
        </div>
)}



export default MatchedPlants