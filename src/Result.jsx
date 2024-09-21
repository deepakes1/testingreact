import React from 'react'
import { useParams } from 'react-router-dom'
import  MovieList  from './List'


function Result() {
  let {slug} = useParams();
  let res = MovieList.find((data)=> data.slug === slug)
  console.log(res)


  return (
    <div>
      
        
          <div className="">
            <h1>{res.Actors}</h1>
          </div>
       
      
    </div>
  )
}

export default Result
