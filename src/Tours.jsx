import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours

// - cr8 base Tours component
// - Add parameter tours at Tours
// - renew structure return
// - add div with classname tours
// - add base iterate over tours map
// - call tour as a argument
// - add return with Tour Component & import it too
// - Add key property is set with the id value of the tour object being iterated over.
// - Add spread operator for used to retrieve all the properties on the tour object and pass them as separate properties into the <Tour /> element/component.
// - check parameter with log(tour);
// - Add parameter removeTour in Tours Component
// - Pass in removeTour at return