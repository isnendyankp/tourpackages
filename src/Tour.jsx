import React from 'react'

const Tour = ({ id, image, info, name, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
    </article>
  );
};

export default Tour

// - cr8 base Tour component
// - Destructured element with parameter id,image,info,name,price
// - Add article with className single-tour on return
// - Setup image Element structure
// - Setup span as a price for each tour