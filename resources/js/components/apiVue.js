export async function getWeatherAPI(lat, long) {
    const response = await fetch(
        `/api/weather?latitude=${lat}&longitude=${long}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    if (response.ok) {
        const responseJSON = response.json();
        return responseJSON;
    }
    console.log("problem with weather API");
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

export async function getCityCoordinates(city, key) {
    const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${key}`,
        {
            method: "GET"
        }
    );
    if (response.ok) {
        const responseJSON = response.json();
        return responseJSON;
    }
    console.log("problem with Mapbox request");
}
