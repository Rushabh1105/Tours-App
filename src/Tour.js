import React, {useState,  } from 'react';
import "./Tour.css";

function Tour({id, image, info, name, price, removeTour }) {

    const [readMore, setReadMore] = useState(false);

    
  return (
    <div className='single-tour'>
      <img src={image} alt={image} />
      <footer>
        <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price"> $ {price} </h4>
        </div>
        <p>
            {
                readMore ? info : `${info.substring(0, 150)}...`
            }
            <button onClick={() => setReadMore(!readMore) } >
                {
                    readMore ? 'showless' : 'read more'
                }
            </button>
        </p>
        <button onClick={() => removeTour(id) } className="delete-button"> 
            Not Interested
        </button>
      </footer>
    </div>
  )
}

export default Tour
