import { useState } from 'react'
import React from 'react'
import './Home.css'
const Home = () => {
    {/*https://catfact.ninja/fact*/}
   const [ fact, setfact]=useState(false);
   const [data, setdata] = useState("")
   const handlesubmit=async()=>{
    setfact(true);
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        setdata(data.text);
      } catch (err) {
        setError('Failed to fetch fact. Please try again.');
      } 
   }
  return (
    <div>
        <div className="home">
            <div className="main-container">
                <div className="container">
                <p className='header'>Let's fetch Awesome facts!</p>
                <button onClick={handlesubmit}>Click Me</button>
                 
                    {fact && 
                    <div className="factcontainer">
                        <p className='fact'>{data}</p>
                    </div>
                    }
                 
            </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Home;
