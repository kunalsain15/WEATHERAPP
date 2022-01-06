import React, { useEffect, useState } from 'react';
import './Weather.css';

     const Weather=()=>{

         const [city, setCity] = useState(null);
         const [Search, setSearch] = useState('');

 useEffect(()=>{
     const fetchapi = async ()=>{
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=5690e9437af8142b51b0f8826727d7cd`
         const response = await fetch(url);
         const resjson = await response.json(); 
          setCity(resjson.main); 
  };
      fetchapi();
   },[Search])
    return(<>
        <img src="web.jpg" alt="web"/>
   <div className="card-img-overlay">

 <div className="box">
          <h1>WEATHER</h1>
          <div className="input">
          <input type="search" value={Search} className="inputfield" onChange={(event)=>{setSearch(event.target.value)}}/>
  </div>
  
   {!city ? (
         <p>No data found</p>
   ) :(
    <div>
       <div className="info">
         <h3 className="heading">
             <i className="fa fa-map-marker"></i>{Search}
         </h3>
             <h1 className="temp">{city.temp}°C</h1>
   </div>
      
   </div>
      
   )} 
  </div> 
  </div>
    </>
    
    );
};
export default Weather;

