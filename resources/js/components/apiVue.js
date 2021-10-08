export async function getWeather(lat, long) {
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
