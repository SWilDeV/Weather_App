<template>
    <div>
        <div class="text-white mb-8">
            <div
                class="weather-container font-sans w-screen md:w-128 max-w-lg overflow-hidden rounded-lg shadow-lg md:mt-4"
            >
                <current
                    :city="Location.city"
                    :country="Location.country_name"
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
import { getWeather, getLocation } from "./apiVue.js";
import headerV from "./Header";
import current from "./Current";
import daily from "./Daily.vue";

export default {
    name: "Home",
    components: {
        headerV,
        current,
        daily
    },
    data: function() {
        return {
            WeatherItems: {},
            CurrentWeather: null,
            DailyWeather: null,
            Location: {}
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
                if (localStorage.getItem("WeatherData") === null) {
                    const APIKey = process.env.MIX_LOCATIONKEY;
                    const LocationData = await getLocation(APIKey);
                    localStorage.setItem(
                        "LocationData",
                        JSON.stringify(LocationData)
                    );

                    const lat = LocationData.latitude;
                    const long = LocationData.longitude;
                    const WeatherData = await getWeather(lat, long);
                    localStorage.setItem(
                        "WeatherData",
                        JSON.stringify(WeatherData)
                    );
                    this.useLocalData();
                } else {
                    this.useLocalData();
                }
            } catch (e) {
                console.log(e);
            }
        },
        async useLocalData() {
            this.WeatherItems = await JSON.parse(
                localStorage.getItem("WeatherData")
            );
            this.Location = await JSON.parse(
                localStorage.getItem("LocationData")
            );
            this.CurrentWeather = this.WeatherItems.current;
            this.DailyWeather = this.WeatherItems.daily;
        }
    }
};
</script>
