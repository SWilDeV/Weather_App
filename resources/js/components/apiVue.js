export async function getWeather(APIKey) {
    const Location = await getLocation(APIKey);

    const lat = Location.latitude;
    const long = Location.longitude;
 
    const response = await fetch(`/api/weather?latitude=${lat}&longitude=${long}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (response.ok) {
        const responseJSON = response.json();
        return responseJSON;
    }
    console.log("problem with weather API");
}

export async function getFakeAPI() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos",
        {
            method: "GET"
        }
    );
    if (response.ok) {
        const responseJSON = response.json();
        return responseJSON;
    }
    console.log("problem with API");
}

export async function getLocation(APIKey) {
    const response = await fetch(
        `http://api.ipstack.com/check?access_key=${APIKey}`,
        {
            method: "GET"
        }
    );
    if (response.ok) {
        const responseJSON = response.json();
        return responseJSON;
    }
    console.log("problem with LocationAPI request");
}
