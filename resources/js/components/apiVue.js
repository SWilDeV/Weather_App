export async function getWeather() {

    const location = await getLocationInfo();
    const latitude = location.latitude;
    const longitude = location.longitude;
    const city = location.city;
    const country = location.country_name;
  
    console.log(latitude +', '+longitude + ', '+ city +', ' + country);
  
      const response = await fetch("/weather", {
          method: "GET"
      });
      const responseJSON = response.json();
      return responseJSON;
  }
  
  export async function getLocationInfo() {
      const response = await fetch("/location", {
          method: "GET"
      });
      const responseJSON = response.json();
      return responseJSON;
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