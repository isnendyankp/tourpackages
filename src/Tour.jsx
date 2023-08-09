import React from 'react'


const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info :}</p>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour

// - cr8 base Tour component
// - Destructured element with parameter id,image,info,name,price
// - Add article with className single-tour on return
// - Setup image Element structure
// - Setup span as a price for each tour
// - Add div & pass parameter name, info
// - Add parameter removeTour in Tour Component
// - Add removeTour with Pass in at button Tour Component
// - setup state variable with useState
// - setup readmore display with ternary conditional