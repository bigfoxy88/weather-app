export default async function getWeatherInfo(location='harare'){
    try{
     let weatherFetch= await fetch('https://api.weatherapi.com/v1/current.json?key=91f1abf778854b84a47101354241604&q='+location,{mode:"cors" })
     let weatherInfo=await weatherFetch.json()
     console.log(weatherInfo)
     return{
        country:weatherInfo.location.country,
        city:weatherInfo.location.name,
        "time":weatherInfo.location.localtime,
        condition:weatherInfo.current.condition.text,
        conditionIcon:weatherInfo.current.condition.icon,
        tempC:weatherInfo.current.temp_c,
        tempF:weatherInfo.current.temp_f,
        feelslikeC:weatherInfo.current.feelslike_c,
        feelslikeF:weatherInfo.current.feelslike_f,
        humidity:weatherInfo.current.humidity,
        precip_mm:weatherInfo.current.precip_mm,
        wind_dir:weatherInfo.current.wind_dir,
        wind_speed:weatherInfo.current.wind_kph
     }


    
    }catch(err){
     console.error(err)
    }
       
    

}  
