<template>
    <div>
        <div class="text-white mb-8">
            <div
                class="weather-container font-sans w-screen md:w-128 max-w-lg overflow-hidden rounded-lg shadow-lg md:mt-4"
            >
                <searchBar @city-added="changeCity($event)" />
                <current
                    :city="LocationCity"
                    :country="LocationCountry"
                    v-if="CurrentWeather"
                    :time="CurrentWeather.dt"
                    :temp="CurrentWeather.temp"
                    :humidity="CurrentWeather.humidity"
                    :rain="CurrentWeather.rain"
                    :sunset="CurrentWeather.sunset"
                    :wind="CurrentWeather.wind_speed"
                    :feel="CurrentWeather.feels_like"
                    :weather="CurrentWeather.weather"
                />

                <daily
                    v-for="weather in getArray"
                    :key="weather.dt"
                    :clouds="weather.clouds"
                    :temps="weather.temp"
                    :day="weather.dt"
                    :weather="weather.weather"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { getWeatherAPI, getLocation, getCityCoordinates } from "./apiVue.js";
import current from "./Current";
import searchBar from "./Search";
import daily from "./Daily.vue";

export default {
    name: "Home",
    components: {
        current,
        daily,
        searchBar
    },
    data: function() {
        return {
            WeatherItems: {},
            CurrentWeather: null,
            DailyWeather: null,
            LocationCity: "",
            LocationCountry: "",
            City: null
        };
    },
    computed: {
        getArray() {
            //remove first entry of the array
            if (this.DailyWeather) {
                return this.DailyWeather.slice(1);
            }
        }
    },
    created() {
        this.getLocation();
    },
    methods: {
        async getLocation() {
            try {
                const APILocationKey = process.env.MIX_LOCATIONKEY;
                const LocationData = await getLocation(APILocationKey);
                localStorage.setItem(
                    "LocationData",
                    JSON.stringify(LocationData)
                );
                const lat = LocationData.latitude;
                const long = LocationData.longitude;
                this.LocationCity = LocationData.city;
                this.LocationCountry = LocationData.country_name;

                this.getWeather(lat, long);
                // } else {
                //     this.useLocalData();
                // }
            } catch (e) {
                console.log(e);
            }
        },
        async getWeather(lat, long) {
            // const WeatherData = await getWeatherAPI(lat, long);
            this.WeatherItems = await getWeatherAPI(lat, long);
            this.CurrentWeather = this.WeatherItems.current;
            this.DailyWeather = this.WeatherItems.daily;
            // localStorage.setItem("WeatherData", JSON.stringify(WeatherData));
            // this.useLocalData();
        },
        async useLocalData() {
            this.WeatherItems = await JSON.parse(
                localStorage.getItem("WeatherData")
            );
            const Loc = await JSON.parse(localStorage.getItem("LocationData"));
            this.LocationCity = Loc.city;
            this.LocationCountry = Loc.country_name;

            this.CurrentWeather = this.WeatherItems.current;
            this.DailyWeather = this.WeatherItems.daily;
        },
        async changeCity(city) {
            const mapBoxKey = process.env.MIX_MAPBOXKEY;
            const citydata = await getCityCoordinates(city, mapBoxKey);
            console.log(citydata);
            //this.City = citydata.features[0];
            const lat = citydata.features[0].center[1];
            const long = citydata.features[0].center[0];
            console.log(lat + ", " + long);
            this.getWeather(lat, long);

            const citytot = citydata.features[0].place_name.split(",");
            this.LocationCity = citytot[0];
            this.LocationCountry =
                citytot.length == 2 ? citytot[1] : citytot[2];
        }
    }
};
</script>
