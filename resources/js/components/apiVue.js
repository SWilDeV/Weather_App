export async function getWeather() {
  
      const response = await fetch("/weather", {
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