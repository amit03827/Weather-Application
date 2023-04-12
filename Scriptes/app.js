const cityForm=document.querySelector('form');
const detials=document.querySelector('.details')
const time=document.querySelector('.time')
const icon=document.querySelector('.icon img')


const updateUI=(data)=>{
    const cityDetailes=data.cityDetailes;
    const weather=data.weather;

    const html=`<h5 "my-3">${cityDetailes.EnglishName}</h5>

    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my -4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>`
    detials.innerHTML=html

    // set weather ICON

    const iconNumber=`img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconNumber)

    // set Day and Night Image

    let timeSrc= weather.IsDayTime;
    let DNimage='';
    if(timeSrc){
            DNimage='img/day.svg';
    }else{
        DNimage='img/night.svg';

    }
    time.setAttribute('src',DNimage)
    
}


const updateCity=async (city)=>{
    const cityDetailes=await getCity(city);
    const weather=await getWeather(cityDetailes.Key);
    return {cityDetailes, weather};
}

cityForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const location=cityForm.city.value.trim();
    // const city=document.getElementById('input').value.trim();
    cityForm.reset();
    updateCity(location)
    .then(data=> updateUI(data)) 
    .catch(err=>console.log(err.messge))
    localStorage.setItem('location', location);
 })
if (localStorage.getItem('location')) {
    updateCity(localStorage.getItem('location'))
    .then(data=> updateUI(data))
    .catch(err=>console.log(err.messge))   
}


 