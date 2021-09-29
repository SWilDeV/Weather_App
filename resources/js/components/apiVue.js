export async function getWeather() {

  const Location = getLocation();

  const lat = Location.latitude;
  const long = Location.longitude;
  const data ={latitude: lat, longitude:long}

  // const response = await fetch("/weather", {
  //     method: "GET"
  // });
  // const responseJSON = response.json();
  // return responseJSON;
  
  const response = await fetch("/weather",{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });

    if(response.ok){
      const responseJSON = response.json();
      return responseJSON;
    }
      console.log('problem with API')
}
  
export async function getFakeAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos", {
      method: "GET"
  });
  if(response.ok){
    const responseJSON = response.json();
    return responseJSON;
  }
  console.log('problem with API')
}

export async function getLocation(){
  const response = await fetch(`http://api.ipstack.com/check?access_key=${process.env.VUE_APP_API_LOCATION_IPSTACK_KEY}`,{
    method:"GET"
  });
  if(response.ok){
    const responseJSON = response.json();
    return responseJSON;
  }
  console.log('problem with LocationAPI request')
}