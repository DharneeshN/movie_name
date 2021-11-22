/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import{useState,useEffect} from 'react';



function App() {

   
let [movieinfo,setMovieinfo] = useState(null);
let [title,setTitle] = useState("kumki");
  useEffect(()=>{
     getmoviedata();
  
  },[])

  function readTitle(value){
    setTitle(value);
    
   }

  function getmoviedata(){

    let url= `https://www.omdbapi.com/?t=${title}&apikey=675de33e ` ;
    
    fetch(url) 
    .then((response)=>response.json())
    .then((movie)=>{
      console.log(movie);
      setMovieinfo(movie);
       
    })
    .catch((err)=>{console.log(err);
    })

  }
   
  
 return (
    <div  >
     

      <div className="container" >
        <div className="paddin" >
          <h1>Movie name</h1>
          <div className="Input-group">
             <input type="text" placeholder="Enter movie name" onChange={(events)=>{readTitle(events.target.value)}} className="search-field"/>  
             <button className="btn" onClick={getmoviedata}>Search</button> 
          </div>
          {
            movieinfo?.Error===undefined?(
          <div className="movie">
            <div className="poster">
             <img src={movieinfo?.Poster} className="img-Poster"/>
            </div>
            <div className="details">
               <div className="paddin">
                 <h2>{movieinfo?.Title}</h2>
                 <p><strong>Genre : </strong>{movieinfo?.Genre}</p>
                 <p><strong>Language : </strong>{movieinfo?.Language}</p>
                 <p><strong>Actors : </strong>{movieinfo?.Actors}</p>
                 <p><strong>Director : </strong>{movieinfo?.Director}</p>
                 <p><strong>Plot : </strong>{movieinfo?.Plot}</p>
                 <p><strong>Runtime : </strong>{movieinfo?.Runtime}</p>
                 </div>
                  <div className="paddin">
                   <div>
                     <strong>{movieinfo?.Ratings[0].Source}</strong>
                      <h3>{movieinfo?.Ratings[0].Value}</h3> 
                   </div>
                 </div> 
                 
           </div>
          </div>
               ):
               (
                 <h1>Movie not found</h1>
               )         
            }
        </div>
       </div>
       <div className="copy"> ©COPYRIGHT RESERVED 2021 - BY Dharneesh</div>
    </div>
                    
  );
}

export default App;
