import logo from './assets/image/logo.png'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'
import { FaBars } from "react-icons/fa";


function App() {
  const coffees = useLoaderData();

  return (
    <div className='m-4'>
      <div className='rounded-lg p-6  bg-yellow-900  flex justify-around items-center'>
        <div className='flex items-center'>
        <img className='w-[80px] h-[70px]  mr-10 flex self-center' src={logo} alt="" />
      <h1 className='text-4xl  font-serif  font-extrabold text-white'>Drinko Coffee: <span className='bg-white p-2 rounded-lg m-4 text-yellow-900'>{coffees.length}</span></h1>

        </div>
     
      <div >
  <div className="dropdown dropdown-hover ">
  <div tabIndex={0} role="button" className="btn text-2xl m-1"><FaBars />
</div>
  <ul tabIndex={0} className="dropdown-content z-[1]  bg-base-200 menu p-4 rounded-box w-36">
  <Link className='bg-yellow-900 text-white text-center p-2 rounded-md font-bold' to='/addCoffee'>Add Coffee</Link>
  <Link className='bg-yellow-900 text-white p-2 mt-2 rounded-md font-bold' to='/updateCoffee'>Update Coffee</Link>
   
  </ul>
</div>
  </div>
  
      </div>
     <div className='grid md:grid-cols-3  gap-8 mx-auto'>
     {
      coffees.map(coffee => <CoffeeCard
      key={coffee._id}
      coffee={coffee}
      ></CoffeeCard>)
     }
      
     </div>
    </div>
  )
}

export default App
