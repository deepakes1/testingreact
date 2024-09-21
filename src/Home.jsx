import React from 'react'
import MovieList from './List'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
     <h1>this is home</h1> 

     {
        MovieList.map((data)=> ( 
            <Link to = {`/${data.slug}`}>
                <div className="" key={data.id}>
                    <h1>{data.Title}</h1>
                    <h1>{data.Year}</h1>
                </div>
            </Link>
        ))
     }
    </div>  
  )
}

export default Home
