import React,{useState,useEffect} from "react";
import "./css/styles.css"

const TempApp = () => {
    const [city,setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect ( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=26556f01c1273ec570927ea99037fc42`;
            const response = await fetch(url);
            const resJSON = await response.json();

            setCity(resJSON.main);
        };
        fetchApi();
    },[search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" 
                        className="inputField"
                        value={search}
                        onChange = { (event) => {
                            setSearch(event.target.value)
                        }}

                    />
                
                </div>
                {/* Ternary operator used */}
                {!city ? 
                    (<p className="errorMsg">Data Not Found</p>) : 
                    (<>
                        <div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">
                            {city.temp}°Cel
                        </h1>
                        <h3 className="tempmin_max">
                            MIN:- {city.temp_min}°Cel || MAX:- {city.temp_max}°Cel
                        </h3>

                    </div>
                 </>)} 
               
            </div>
        </>
    )
}

export default TempApp;
