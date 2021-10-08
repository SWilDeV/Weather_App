export function getSkycon(id) {
    // "clear-day", 800
    // "clear-night",
    // "cloudy",801-804
    // "rain",500-531 ++
    // "sleet",300-321++
    // "rain-snow",615-622++
    // "snow",600-613 ++
    // "wind",
    // "fog",700-799++
    // "thunder",210-221 ++
    // "thunder-rain",200-202,230-232++
    // "hail"
    if ((id >= 200 && id <= 202) || (id >= 230 && id <= 232)) {
        return "thunder-rain";
    } else if (id >= 210 && id < 221) {
        return "thunder";
    } else if (id >= 300 && id <= 321) {
        return "sleet";
    } else if (id >= 500 && id <= 531) {
        return "rain";
    } else if (id >= 600 && id <= 613) {
        return "snow";
    } else if (id >= 615 && id <= 622) {
        return "rain-snow";
    } else if (id >= 700 && id <= 799) {
        return "fog";
    } else if (id == 800) {
        return "clear-day";
    } else if (id >= 801 && id <= 804) {
        return "cloudy";
    }
}
