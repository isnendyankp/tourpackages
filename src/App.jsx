import { useEffect, useState } from "react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const fetchTours = async () =>{
    setIsLoading(true)
    try {
      
    } catch (error) {
      
    }

  }

  useEffect(()=>{}, [

  ])
  return <h2>Tours Starter</h2>;
};
export default App;

// add progress:
// - cr8 state Variable isLoading
// - cr8 state Variable tours
// - cr8 base useEffect
// - cr8 base fetch function(fetchTours) for get data tour from request API
// - add setIsLoading in fetchTours cr8 base try & catch