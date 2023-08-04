import React from 'react'

const Tours = ({tours}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className='tours'>
        {tours.map(()=>{
          
        })}
      </div>
    </section>
  );
}

export default Tours

// - cr8 base Tours component
// - Add parameter tours at Tours
// - renew structure return
// - add div with classname tours
// - add base iterate over tours map