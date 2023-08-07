import { useEffect, useState } from "react";
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const removeTour = (id) =>{

  }

  const fetchTours = async () =>{
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  };

  useEffect(()=>{
    fetchTours();
  }, []);

  if(isLoading){
    return <main>
      <Loading />
    </main>
  }
  
  return <main>
    <Tours tours={tours}/>
  </main>
};
export default App;

// add progress:
// - cr8 state Variable isLoading
// - cr8 state Variable tours
// - cr8 base useEffect
// - cr8 base fetch function(fetchTours) for get data tour from request API
// - add setIsLoading in fetchTours cr8 base try to get data & catch error for manipulate error with error message
// - add request URL with response variable then make data into object JSON & manipulate data with display console.log(tours)
// - add log error & navigate fetchTour in useEffect
// - add setIsloading(false) if success or get error to indicates that the data collection process is complete.
// - data tours that have been taken are entered into state tours. : setTours(tours);
// - add return based on condition: if(isLoading){ return } 
// - add loading component at return conditianal statement & import Loading component
// - import Tours & pass in return
// - pass in tours prop at return
// - cr8 base function removeTour
// - pass in paramter id for removeTour 