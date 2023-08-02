import { useEffect, useState } from "react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const fetchTours = async () =>{
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
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
// - add setIsLoading in fetchTours cr8 base try to get data & catch error for manipulate error with error message
// - add request URL with response varible then make data into object JSON & manipulate data with display console.log(tours)