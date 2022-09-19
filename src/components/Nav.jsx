import {Link} from 'react-router-dom'

const Nav = () =>{
    return(
        <div className='Nav'>
            <Link to = '/'>About</Link> 
            <Link to =  '/plant'>Find a Plant</Link>
            <Link to = '/yourNewGarden'>Your Garden</Link>
        </div>
    )
}
export default Nav