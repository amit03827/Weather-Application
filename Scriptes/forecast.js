const key='dxnoL9U7NpIrpxH0cgROKyPjobBqM1Kk'

const getCity=async (city)=>{
    const baseUrl="http://dataservice.accuweather.com/locations/v1/cities/search";

    const query=`?apikey=${key}&q=${city}`
   
    const response=await fetch(baseUrl+query);
    const data=await response.json();
    if(data.length==0){
        throw new Error('This city is not exit')
    }
        return data[0];
}


// Get Weather Condition 

const getWeather=async (id)=>{
      const base='http://dataservice.accuweather.com/currentconditions/v1/'
      const query=`${id}?apikey=${key}`;

      const response=await fetch(base+query)
      const data=await response.json()
        return data[0];

}
