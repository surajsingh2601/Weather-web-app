import React, { useEffect, useState } from 'react'


export default function Tempapp() {
    const handleOnchange = (event) => {
            setSearch (event.target.value)

    }

    // const [ text, setText] = useState("");
    const [city, setCity] = useState("");
    const [search, setSearch] = useState ("Chennai")

    useEffect (  () => {

        const fetchApi = async () => {
             const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fcc849bf51cd93e72fa1a3154b4d38f4`      
            const response = await fetch(url);
          //  console.log(response); 
          const resjson = await response.json();
           console.log(resjson);
         setCity (resjson.main);
        }
        fetchApi();
    } ,[search] )


  return (
    <>
    <div>
      <div className="container my-5 d-flex justify-content-center bg-info card w-50">
  <div className="card-body">
    <h2 className="card-title d-flex justify-content-center">WEATHER REPORT</h2>
    <input text-center='true' type="search" className="form-control me-2" onChange={handleOnchange} placeholder="Type City Name" aria-label="Search"/>
    

                            {!city ? (
                              <p> No Data Found </p>
                            ) : (
                              <div>
                              <div className='info text-center my-2'>
                              <h1 className="Location"> <i className="fa-solid fa-street-view fa-beat-fade"></i> {search} </h1>
                             <h1 className= "temp"> {city.temp}° Cel </h1>
                             <h3>  Feels-Like: {city.feels_like} </h3>
                             <h3 className="tempmin_max">  Max: {city.temp_max}° Cel | Min: {city.temp_min}° Cel </h3>
                    </div>
                   </div>
             ) }

    
                            </div>     
                </div>  
            </div>
    </>
    
  )
}
