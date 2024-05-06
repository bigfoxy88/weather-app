import getWeatherInfo from './getData'



export let celFar='c';
export default async function renderHtml(location){
    
    const city =document.querySelector('.city')
    const country =document.querySelector('.country');
    const condition=document.querySelector('.condition')
    const conditionsIcon=document.querySelector('.weatherRepresentation')
    const temp=document.querySelector('.temp');
    const corF=document.querySelectorAll('.CorF');
    const feelsLike=document.querySelector('.feelOfTemp')
    const humidity=document.querySelector('.humid')
    const percipitation=document.querySelector('.percip')
    const wind_dir=document.querySelector('.winddir')
    const windsp=document.querySelector('.windsp')
    const loader=document.getElementById('loader')
    let data=await getWeatherInfo(location);
   
    city.textContent=data.city
    country.textContent=data.country
    condition.textContent=data.condition
    conditionsIcon.src=data.conditionIcon;
    temp.innerText=data.tempC
    corF.forEach(x=>x.textContent=' C')
    feelsLike.textContent=data.feelslikeC;
    humidity.textContent=data.humidity
    percipitation.textContent=data.precip_mm+'mm'
    wind_dir.textContent=data.wind_dir;
    windsp.textContent=data.wind_speed+' kph'
    celFar='c'
    setTimeout(()=>loader.classList.remove('loader'),1500)
 
}




   