import React from 'react'

import './RecommendationItems.css'

function RecommendationItems({
    id,
    name,
    last,
    img
}) {
  return (
    <div className="item-container">
       
       <div className = "item-description">
       <img src = {img} alt = "item" />
            <div className = "item-id">
                {id}
            </div>

            <div className = "item-name">
                {name}
            </div>

            <div className = "item-last">
                {last}
            </div>

            <button className = "btn-atc">Add to Cart</button>
            <br/>
            <button className = "btn-buy">Buy Now</button>
       </div>
    </div>
  )
}

export default RecommendationItems