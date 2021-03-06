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
                    v-if="CurrentTime"
                    :time="CurrentTime"
                    :temp="CurrentTemp"
                    :feel="CurrentFeel"
                    :icon="CurrentIcon"
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
import { getSkycon } from "./weatherIcons";
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
            CurrentTemp: null,
            CurrentFeel: null,
            CurrentTime: null,
            CurrentIcon: null,
            DailyWeather: null,
            LocationCity: "Position actuelle",
            LocationCountry: ""
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
            //get user location
            try {
                const PositionData = await this.getCoordinates();
                PositionData.coords.latitude;

                this.getWeather(
                    PositionData.coords.latitude,
                    PositionData.coords.longitude
                );
            } catch (e) {
                console.log(e);
            }
        },
        async getWeather(lat, long) {
            //OpenWeather API
            try {
                const Weather = await getWeatherAPI(lat, long);
                this.convertCurrentData(
                    Weather.current.dt,
                    Weather.daily,
                    Weather.current.weather[0].id,
                    Weather.current.temp,
                    Weather.current.feels_like
                );
            } catch (e) {
                console.log(e);
            }
        },
        convertCurrentData(CurrentTime, daily, id, currentTemp, feels_like) {
            //Current Data
            this.CurrentTemp = Math.round(currentTemp - 273.15);
            this.CurrentFeel = Math.round(feels_like - 273.15);
            this.convertTime(CurrentTime);
            this.CurrentIcon = getSkycon(id);

            //Daily Data
            this.DailyWeather = daily;
        },
        async changeCity(city) {
            //get city location with city provided by user
            //MapBox API
            try {
                const mapBoxKey = process.env.MIX_MAPBOXKEY;
                const citydata = await getCityCoordinates(city, mapBoxKey);
                const lat = citydata.features[0].center[1];
                const long = citydata.features[0].center[0];
                this.getWeather(lat, long);

                const citytot = citydata.features[0].place_name.split(",");
                this.LocationCity = citytot[0];
                this.LocationCountry =
                    citytot.length == 2 ? citytot[1] : citytot[2];
            } catch (e) {
                console.log(e);
            }
        },

        convertTime(time) {
            const dateObject = new Date(time * 1000);
            this.CurrentTime = dateObject.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });
            //his.CurrentDay = dateObject.toLocaleDateString("fr-FR");

            // const sunsetTime = new Date(this.sunset * 1000);
            // this.sunsett = sunsetTime.toLocaleTimeString([], {
            //     hour: "2-digit",
            //     minute: "2-digit",
            //     hour12: false
            // });
        },
        async getCoordinates() {
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej);
            });
        }
    }
};
</script>
