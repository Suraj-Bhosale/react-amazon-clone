import React from 'react'
import RecommendationItems from '../Recommendations/RecommendationItems.js';

const recommendationData = [
    {
        id: 1,
        name: 'John',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    },

    {
        id: 2,
        name: 'Vicky',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    },

    {
        id: 1,
        name: 'John',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    },

    {
        id: 2,
        name: 'Vicky',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    },
    {
        id: 1,
        name: 'John',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    },

    {
        id: 2,
        name: 'Vicky',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    }
    ,
    {
        id: 1,
        name: 'John',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    },

    {
        id: 2,
        name: 'Vicky',
        last: 'Bhosale',
        img: 'https://m.media-amazon.com/images/I/51bR3UBezPL._AC_SY240_.jpg'
    }
]

function Recommendation () {
  return (
    <div className="recommendation-container">
         <div className="recommendation-header">
            Recommendation
         </div>
        <div className="recommendation-items">
            {
                recommendationData.map( a => <RecommendationItems 
                id = {a.id}
                name = {a.name}
                last = {a.last}
                img = {a.img}/>)
            }
        </div>
  

    </div>
  )
}

export default Recommendation